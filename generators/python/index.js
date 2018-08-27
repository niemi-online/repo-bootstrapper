var Generator = require('yeoman-generator');
var fs = require('fs');

module.exports = class extends Generator {
    initializing() {
        this.composeWith(require.resolve('../base'), {
            "properties": [{
                "type": "input",
                "name": "name",
                "message": "Your app name"
            }, {
                "type": "input",
                "name": "registry",
                "message": "The docker registry for publishing images"
            }],
            "files": [{
                "name": "Makefile",
                "properties": ["name", "registry"]
            }],
            "caller": this
        })
    }
}
