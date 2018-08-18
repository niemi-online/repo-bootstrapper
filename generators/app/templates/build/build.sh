#!/usr/bin/env bash
source ./default.env
COMMIT_ID=`git rev-parse HEAD`
if git describe --tags --exact-match ${COMMIT_ID}; then
    TAG=`git describe --tags --exact-match ${COMMIT_ID}`
else
    TAG=${COMMIT_ID}
fi

# check is built
DOCKER_LOCATOR=${DOCKER_REGISTRY}/${DOCKER_LABEL}:${TAG}
if docker pull ${DOCKER_LOCATOR}; then
    echo "image already exists"
    exit 0
fi

# TODO: do a real flag here when I can google
if $1; then
    echo "executing full release build"
    rm -rf ./dist
    if docker build -t ${DOCKER_LOCATOR} -f ./build/release/Dockerfile .; then
        echo "build success"
    else 
        echo "build failed"
        exit 1
    fi
else
    echo "executing quick build"
    if docker build -t ${DOCKER_LOCATOR} -f ./build/quickbuild/Dockerfile .; then
        echo "build success"
    else
        echo "build failed"
        exit 1
    fi
fi

if docker push ${DOCKER_LOCATOR}; then
    echo "upload success"
else
    echo "push failed"
    exit 1
fi

echo "build complete!"
