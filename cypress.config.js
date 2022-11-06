const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    specPattern: "**/*.feature",
    baseUrl: "http://automationpractice.com/index.php",
    viewportWidth: 1400,
    viewportHeight: 800,
    watchForFileChanges: false,
    retries:{
      openMode: 1,
      runMode:2
    }
  },
});
