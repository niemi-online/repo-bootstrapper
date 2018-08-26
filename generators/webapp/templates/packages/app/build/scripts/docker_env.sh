#!/usr/bin/env bash
echo '========================================'
echo 'Setting up build environment'
echo '========================================'
echo ''
export DOCKER_REGISTRY=<%= registry %>
export DOCKER_LABEL=<%= name %>-app

export COMMIT_ID=`git rev-parse HEAD`
if git describe --tags --exact-match ${COMMIT_ID}; then
    export TAG=`git describe --tags --exact-match ${COMMIT_ID}`
    export IS_TAGGED_BUILD=true
else
    export TAG=${COMMIT_ID}
    export IS_TAGGED_BUILD=false
fi
export DOCKER_LOCATOR=${DOCKER_REGISTRY}/${DOCKER_LABEL}:${TAG}

echo "DOCKER_REGISTRY: " $DOCKER_REGISTRY
echo "DOCKER_LABEL: " $DOCKER_LABEL
echo "COMMIT_ID: " $COMMIT_ID
echo "TAG: " $TAG
echo "IS_TAGGED_BUILD: " $IS_TAGGED_BUILD
echo "DOCKER_LOCATOR: " $DOCKER_LOCATOR
echo ''

echo '========================================'
echo 'Done setting up build environment'
echo '========================================'
echo ''
