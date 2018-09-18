COMMIT_ID=`git rev-parse HEAD`
if git describe --tags --exact-match ${COMMIT_ID} >/dev/null 2>/dev/null; then
    printf `git describe --tags --exact-match ${COMMIT_ID}`
else
    printf ${COMMIT_ID}
fi
