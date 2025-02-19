import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://automationexercise.com",
    supportFile: "cypress/support/e2e.ts",
    specPattern: "cypress/e2e/**/*.cy.ts",
    defaultCommandTimeout: 10000,
  },
});
