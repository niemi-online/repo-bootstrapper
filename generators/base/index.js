var Generator = require('yeoman-generator');
var fs = require('fs');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        this.templating = opts;
        this.caller = opts.caller;
    }

    initializing() {
        this.configs = this.config.getAll();
    }

    async prompting() {
        if(!this.config.existed) {
            this.configs = await this.prompt(this.templating.properties);
        }
    }

    configuring() {
        this.config.set(this.configs);
        this.config.save();

        // create an easy-access map for future use
        this.templateToProps = {};
        for (const file of this.templating.files) {
            this.templateToProps[file.name] = file.properties;
        }
    }

    writing() {
        const caller = this.caller;
        var files = fs.readdirSync(caller.sourceRoot());

        for(const file of files) {
            const isTemplateFile = this.templateToProps[file];
            if(isTemplateFile) {
                // TODO: actually restrict available properties
                caller.fs.copyTpl(
                    caller.templatePath(file),
                    caller.destinationPath(file),
                    this.configs
                )
            } else {
                caller.fs.copy(caller.templatePath(file), caller.destinationPath(file))
            }
        }
    }
};
