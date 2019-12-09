set -euxo pipefail
node --experimental-modules frozen/build2.mjs src/parsegen/generate.ics --out out
node --experimental-modules out/generate.mjs "$@"
