/// <reference types="cypress" />

import CartPage from "../pages/cart.page";
import NavbarComponent from "../pages/common/navbar.component";
import LoginPage from "../pages/login.page";

declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>;
      logout(): Chainable<void>;
      removeProductIfPresent(productName: string): Chainable<void>;
    }
  }
}

Cypress.Commands.add("login", (email: string, password: string) => {
  cy.visit("/login");
  LoginPage.login(email, password);
  cy.contains("Logged in as").should("be.visible");
});

Cypress.Commands.add("logout", () => {
  NavbarComponent.logout();
  cy.url().should("include", "/login");
});

Cypress.Commands.add("removeProductIfPresent", (productName: string) => {
  cy.log("Checking if product is in the cart before removal...");
  CartPage.visit();

  cy.get("body").then(($body) => {
    if ($body.find("#cart_info_table").length > 0) {
      cy.log("Product found in cart, removing...");
      CartPage.removeProduct(productName);
    } else {
      cy.log("No products in the cart, skipping removal.");
    }
  });
});

export {};
