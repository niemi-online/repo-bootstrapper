var Generator = require('yeoman-generator');
var fs = require('fs');

module.exports = class extends Generator {
    initializing() {
        this.composeWith(require.resolve('../base'), {
            "properties": [{
                "type": "input",
                "name": "org",
                "message": "Your organization"
            }, {
                "type": "input",
                "name": "name",
                "message": "Your app name"
            }, {
                "type": "input",
                "name": "registry",
                "message": "The docker registry for publishing images"
            }],
            "files": [{
                "name": "packages/app/package.json",
                "properties": ["org", "name"]
            }, {
                "name": "packages/app/build/scripts/docker_env.sh",
                "properties": ["registry", "name"]
            }, {
                "name": "packages/app/src/containers/connectedorderbox.tsx",
                "properties": ["registry", "name"]
            }, {
                "name": "packages/commons/package.json",
                "properties": ["org", "name"]
            }],
            "caller": this
        })
    }
}
