exports.config = {
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome',
      chromeOptions: {
          args: [
            'show-fps-counter=true',
            //"--headless",
            "--disable-gpu",
            "--window-size=1920,1080"
        ]
      }
    },
  
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['tests/test.js'],

    // Spec patterns are relative to the location of the spec file. They may
    // include glob patterns.
    // suites: {
    //   homepage: 'tests/e2e/homepage/**/*Spec.js',
    //   search: ['tests/e2e/contact_search/**/*Spec.js',
    //     'tests/e2e/venue_search/**/*Spec.js']
    // },

    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',
  
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
      showColors: true, // Use colors in the command line report.
      defaultTimeoutInterval: 30000   // Default time to wait in ms before a test fails.
    }
  };