'use strict';
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const {spawn, exec} = require('child_process');
const util = require('util');
const assert = require('assert').strict;
const {log} = console;

log('node', process.versions.node, 'v8', process.versions.v8);

const execp = util.promisify(exec);

const ROOT = 'out';
const COMPILER = 'frozen/build2.mjs';

function call(command, args, fatal=false) {
    const capture = true;

    return new Promise((resolve, reject) => {
        // log('Calling', command, args);
        // const subprocess = spawn(command, args, {stdio: 'inherit'});
        const subprocess = spawn(command, args);
        let stdout = '';
        let stderr = '';

        if (capture) {
            subprocess.stdout.setEncoding('utf8');
            subprocess.stderr.setEncoding('utf8');
            subprocess.stdout.on('data', data => {stdout += data;});
            subprocess.stderr.on('data', data => {stderr += data;});
        }

        subprocess.on('exit', (code) => {
            // console.log('Subprocess exited with code ' + code);
            if (fatal && code !== 0) {
                const debug = ['process', command, ...args, 'exited with code '].join(' ');
                reject(debug + code);
            } else {
                resolve({code, stdout, stderr});
            }
        });
        subprocess.on('error', (err) => {
            console.log('Failed to start subprocess.');
            reject(err);
        });
    });
}

async function compileTest(name, expect_fail) {
    // const dir = await fs.promises.mkdtemp(ROOT + '/');
    const result = await call('node', ['--experimental-modules', COMPILER, '--src', 'src', '--out', ROOT, 'src/' + name]);
    // const passed = (result.code === 0) !== expect_fail;
    // if (!passed) {
    //     throw name + ' failed';
    // }
    // console.log(name, passed ? 'passed' : 'failed!');
    if (result.stderr.includes('triggerFatalException')) {
        return [name, false];
    }

    return [name, (result.code === 0) !== expect_fail];
}

async function executionTest(name) {
    let result = await call('node', ['--experimental-modules', COMPILER, '--src', 'src', '--out', ROOT, 'src/' + name], true);
    if (result.code !== 0) {return [name, false];}

    const basename = name.slice(0, -4);
    const expected_name = 'src/' + basename + '.out';
    let expected = '';
    if (fs.existsSync(expected_name)) {
        expected = fs.readFileSync(expected_name, 'utf8');
    }

    const name2 = `${ROOT}/${basename}.mjs`;
    result = await call('node', ['--experimental-modules', name2], true);
    return [name, result.code === 0 && result.stdout === expected];
}

(async function main() {
    await call('rm', ['-rf', ROOT], true);
    await call('mkdir', [ROOT], true);

    const tests = [];
    for (const test of fs.readdirSync('src/testcases/bad')) {
        tests.push(compileTest('testcases/bad/' + test, true));
    }
    for (const test of fs.readdirSync('src/testcases/good')) {
        tests.push(compileTest('testcases/good/' + test, false));
    }
    for (const test of fs.readdirSync('src/testcases/exectests')) {
        if (test.endsWith('.ics')) {
            tests.push(executionTest('testcases/exectests/' + test));
        }
    }

    const results = await Promise.all(tests);
    let count = 0;
    for (const [name, passed] of results) {
        if (!passed) {
            console.error(name, 'failed');
        } else {
            count++;
        }
    }
    if (count === results.length) {
        log(count, 'tests passed!');
    }
})()
