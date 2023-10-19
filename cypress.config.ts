import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://time-tracker.builtby.parkside.at/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
