exports.config = {
    specs: 'e2e/features/**/*.feature',
    capabilities: {
        'browserName': 'chrome',
        'name': 'Protractor Tutorial / Example'
    },
    // set to "custom" instead of cucumber.
    framework: 'custom',

    // path relative to the current config file
    frameworkPath: './node_modules/protractor-cucumber-framework',

    // relevant cucumber command line options
    cucumberOpts: {
        require: ['e2e/framework/step_definitions/**/*.js', 'e2e/framework/support/**/*.js'],
        format: "pretty"
    }
};
