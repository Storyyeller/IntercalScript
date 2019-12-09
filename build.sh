set -euxo pipefail
mkdir -p "$1"src/std
cp -r src/std/ "$1"src
cp package.json "$1"
cp LICENSE "$1"
frozen/build2.mjs --shebang --out "$1"frozen src/build2.ics src/formatter/format.ics
