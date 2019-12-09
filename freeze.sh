set -euo pipefail

rm -rf "out/"*
node --experimental-modules frozen/build2.mjs src/build2.ics --shebang --out out
rm -rf "frozen/"*
cp -a out/. frozen
