class RegisterPage {
  private genderRadio = () => cy.get("#id_gender1");
  private passwordInput = () => cy.get("[data-qa='password']");
  private dayDropdown = () => cy.get("[data-qa='days']");
  private monthDropdown = () => cy.get("[data-qa='months']");
  private yearDropdown = () => cy.get("[data-qa='years']");
  private firstNameInput = () => cy.get("[data-qa='first_name']");
  private lastNameInput = () => cy.get("[data-qa='last_name']");
  private addressInput = () => cy.get("[data-qa='address']");
  private countryDropdown = () => cy.get("[data-qa='country']");
  private stateInput = () => cy.get("[data-qa='state']");
  private cityInput = () => cy.get("[data-qa='city']");
  private zipInput = () => cy.get("[data-qa='zipcode']");
  private mobileInput = () => cy.get("[data-qa='mobile_number']");
  private createAccountButton = () => cy.get("[data-qa='create-account']");
  private confirmationMessage = () => cy.get(".title");
  private continueButton = () => cy.get("[data-qa='continue-button']");

  visit(): void {
    cy.visit("/login");
  }

  clickOnContinueButton(): void {
    this.continueButton().click();
  }

  fillSignupForm(user: any): void {
    this.genderRadio().click();
    this.passwordInput().type(user.password);
    this.dayDropdown().select(user.day);
    this.monthDropdown().select(user.month);
    this.yearDropdown().select(user.year);
    this.firstNameInput().type(user.firstName);
    this.lastNameInput().type(user.lastName);
    this.addressInput().type(user.address);
    this.countryDropdown().select(user.country);
    this.stateInput().type(user.state);
    this.cityInput().type(user.city);
    this.zipInput().type(user.zipcode);
    this.mobileInput().type(user.mobile);
  }

  submitForm(): void {
    this.createAccountButton().click();
  }

  verifyAccountCreated(): void {
    this.confirmationMessage().should("contain.text", "Account Created!");
  }
}

export default new RegisterPage();
