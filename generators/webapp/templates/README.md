# App

# Developing
This project relies heavily on `yarn` for all of your build needs. Make sure that you have `node` and `yarn` installed locally w/ `npm install -g yarn`, and then read through the `package.json` for what 
commands are available.

## Initial Setup
<b>Note: these instructions are likely incomplete as I still need to run through full setup!</b>
1. `git init`
1. `yarn bootstrap` to link the repo (TODO: maybe need a `yarn install`?)
2. TODO: figure out why `yarn build` doesn't pick up package `yarn builds`!

You may have some problem with `yarn` for subpackages where the new packages aren't published to any 
nmp registry. This is a yarn bug where it doesn't respect linking properly. It is especially a problem
when adding new local dependencies to a package, usually solved by temporarily removing the local package from the dependencies of the `package.json` of the package you're modifying!

## Building
Full project builds happen by running `yarn install` first and then `yarn build` at the top level of this repository. This will build all the way through to a docker container that you can deploy, tagging the image locally. You can deploy this with `docker run -d -p 8080:8080 <CONTAINER NAME HERE>` assuming you have docker up locally. Visiting `https://localhost:8080/static` should serve your page.

For dev workflows, the `app` package has a `webpack` server that makes your iteration loop faster. Run `yarn dev` within the scope of any project that you're actively developing on, and it will listen for file changes and rebuild automatically. Once you run `yarn dev` from `packages/app` you can visit `https://localhost:8765` to see your site run!

## Deploying
We build everything up into a docker container so that it can be easily deployed. Some docs on how to do this are coming, but for now I would highly recommend managing a `stack.yml` and deploying easily with a docker swarm. Letsencrypt with nginx can be used to ensure SSL (https) for all traffic.

## Major Components
This project is a combination of a few large open source projects. I would recommend reading through the `Getting Started` sections for each of these major components, or most of this won't make much sense!
1. <b>Lerna</b>. This lets us have multiple sub-projects under the `packages` directory. We split these out so we can develop more modular and re-usable front end components.
2. <b>Typescript, React, Redux</b>. This is the core of the coding framework that gets transpiled, bundled, and served to the end user.
3. <b>Webpack, Gulp</b>. These perform build automation so that you can focus on writing code.
3. <b>Docker</b>. This is how we package up the code for easy deployment to a swarm at the end
