var Generator = require('yeoman-generator');
var fs = require('fs');

module.exports = class extends Generator {
    initializing() {
        this.composeWith(require.resolve('../base'), {
            "properties": [{
                "type": "input",
                "name": "name",
                "message": "Your app name"
            }],
            "files": [{
                "name": "index.html",
                "properties": ["name"]
            }],
            "caller": this
        })
    }
}
