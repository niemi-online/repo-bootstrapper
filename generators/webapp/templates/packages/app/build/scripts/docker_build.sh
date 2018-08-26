#!/usr/bin/env bash
source ./build/scripts/docker_env.sh

# NOTE: this script expects that yarn build has already been run locally already. Unless
# you know what you're doing, you should run `yarn build` from the package instead
echo '========================================'
echo 'Starting docker build'
echo '========================================'
echo ''

# check is built
if docker pull ${DOCKER_LOCATOR}; then
    echo "image already exists"
    exit 0
else
    echo "pre-existing image not found, ignoring manifest error and proceeding with build as expected!"
fi

if docker build -t ${DOCKER_LOCATOR} -f ./build/resources/Dockerfile .; then
    echo "build success"
else 
    echo "build failed"
    exit 1
fi

echo '========================================'
echo 'Done with docker build'
echo '========================================'
echo ''