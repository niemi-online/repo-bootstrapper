DOCKER_REGISTRY = <%= registry %>
DOCKER_LABEL = <%= name %>

COMMIT_ID = $(shell git rev-parse HEAD)
# TODO: tags
TAG = $(COMMIT_ID)
DOCKER_LOCATOR = $(DOCKER_REGISTRY)/$(DOCKER_LABEL):$(TAG)
DOCKER_LOCATOR_LATEST = $(DOCKER_REGISTRY)/$(DOCKER_LABEL):latest

build:
	docker build -t $(DOCKER_LOCATOR) .
	docker tag $(DOCKER_LOCATOR) $(DOCKER_LOCATOR_LATEST)

dev:
	docker run -it --rm -v $PWD/app:/app -v $PWD/config.yml:/app/config.yml $(DOCKER_LOCATOR_LATEST)

run:
	docker run -it --rm -v $PWD/config.yml:/app/config.yml $(DOCKER_LOCATOR)
