const { defineConfig } = require("Cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://automationpratice.com.br/login',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
