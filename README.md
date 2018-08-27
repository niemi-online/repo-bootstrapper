# repo-bootstrapper
The standard yoeman generator for applications in my stack!

## Initial Setup
1. `npm install -g yo`
2. `npm install -g @niemi-online/generator-reboot`

## Common Usage
1. Create target directory: `mkdir target && cd target`
1. Boot up the repository: `yo reboot:<target>`
2. Answer the questions!

# Targets
These are the available generator targets

## Webapp
Created through `yo reboot:webapp`. This generates a base webapp project with:
1. Typescript, Sass, React, Redux
2. Lerna
3. Webpack & gulp for dev cycle
3. Dockerization for final deployment
