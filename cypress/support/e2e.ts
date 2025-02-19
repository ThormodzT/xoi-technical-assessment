import "./commands";

Cypress.on("uncaught:exception", (err) => {
  console.error("Uncaught Exception:", err);
  return false;
});

Cypress.on("fail", (error, runnable) => {
  console.error("Test failed:", error.message);
  throw error;
});
