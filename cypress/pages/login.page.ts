class LoginPage {
  private emailInput = () => cy.get("[data-qa='login-email']");
  private passwordInput = () => cy.get("[data-qa='login-password']");
  private loginButton = () => cy.get("[data-qa='login-button']");
  private errorMessage = () => cy.get(".login-form p");
  private signupNameInput = () => cy.get("[data-qa='signup-name']");
  private signupEmailInput = () => cy.get("[data-qa='signup-email']");
  private signupButton = () => cy.get("[data-qa='signup-button']");

  visit(): void {
    cy.visit("/login");
  }

  login(email: string, password: string): void {
    this.emailInput().type(email);
    this.passwordInput().type(password);
    this.loginButton().click();
  }

  signUp(name: string, email: string): void {
    this.signupNameInput().type(name);
    this.signupEmailInput().type(email);
    this.signupButton().click();
  }

  validateErrorMessage(expectedText: string): void {
    this.errorMessage().should("contain.text", expectedText);
  }
}

export default new LoginPage();
