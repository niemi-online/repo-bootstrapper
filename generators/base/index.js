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

    // Dir is the current directory we're traversing in the template set, the
    // context is just the path following the template source root, for friendly
    // specification by the template creator.
    _copyDirRecursive(dir, context) {
        const files = fs.readdirSync(dir);

        for (const file of files) {
            const filePath = "" + dir + "/" + file;
            const stat = fs.statSync(filePath);
            if (stat.isDirectory()) {
                this._copyDirRecursive(filePath, context + file + "/");
            } else {
                const relativePath = context + file;
                console.log("Checking if template file: ", relativePath);
                const isTemplateFile = this.templateToProps[relativePath];
                if(isTemplateFile) {
                    console.log("Filling template variables: ", relativePath);
                    // TODO: actually restrict available properties
                    this.caller.fs.copyTpl(
                        this.caller.templatePath(relativePath),
                        this.caller.destinationPath(relativePath),
                        this.configs
                    );
                } else {
                    this.caller.fs.copy(
                        this.caller.templatePath(relativePath),
                        this.caller.destinationPath(relativePath));
                }
            }
        }
    }

    writing() {
        this._copyDirRecursive(this.caller.sourceRoot(), "");
    }
};
