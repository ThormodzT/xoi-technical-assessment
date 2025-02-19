class HomePage {
  visit(): void {
    cy.visit("/");
  }
}

export default new HomePage();
