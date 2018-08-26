#!/usr/bin/env bash
source ./build/scripts/docker_env.sh

echo '========================================'
echo "Attempting upload for $DOCKER_LOCATOR"
echo '========================================'
echo ''

# check is built
if docker pull ${DOCKER_LOCATOR}; then
    echo "image already exists"
    exit 0
fi

if docker push ${DOCKER_LOCATOR}; then
    echo "upload success"
else
    echo "push failed"
    exit 1
fi

echo '========================================'
echo "Done with upload for $DOCKER_LOCATOR"
echo '========================================'
echo ''