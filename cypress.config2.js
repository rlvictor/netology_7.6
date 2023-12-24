const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    baseUrl: "http://localhost:3000",
    retries: 2,
    viewportWidth: 846,
    viewportHeight: 414,
  },
});
