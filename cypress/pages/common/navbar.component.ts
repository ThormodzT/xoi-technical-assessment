class NavbarComponent {
  private productsLink = () => cy.get("#header a[href='/products']");
  private deleteAccountLink = () => cy.get("#header a[href='/delete_account']");
  private signupLoginLink = () => cy.get("#header a[href='/login']");
  private logoutLink = () => cy.get("#header a[href='/logout']");
  private loggedInUser = () => cy.contains("Logged in as");

  clickOnDeleteAccount(): void {
    this.deleteAccountLink().click();
  }

  visitProducts(): void {
    this.productsLink().click();
  }

  visitSignupLogin(): void {
    this.signupLoginLink().click();
  }

  logout(): void {
    this.logoutLink().click();
  }

  verifyUserLoggedIn(username: string): void {
    this.loggedInUser().should("contain.text", `Logged in as ${username}`);
  }
}

export default new NavbarComponent();
