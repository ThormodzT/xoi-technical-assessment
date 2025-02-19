import NavbarComponent from "../pages/common/navbar.component";
import HomePage from "../pages/home.page";
import LoginPage from "../pages/login.page";
import RegisterPage from "../pages/register.page";

describe("User Registration", () => {
  const uniqueEmail = `testuser${Date.now()}@example.com`;

  after(() => {
    cy.log("Deleting the user account after test completion...");
    RegisterPage.clickOnContinueButton();
    NavbarComponent.clickOnDeleteAccount();
    cy.contains("Account Deleted!").should("be.visible");
  });

  it("GIVEN a user is on the homepage, WHEN they navigate to signup and complete the registration form, THEN the account should be created successfully", () => {
    // Arrange
    HomePage.visit();
    NavbarComponent.visitSignupLogin();

    // Act
    LoginPage.signUp("Test User", uniqueEmail);
    RegisterPage.fillSignupForm({
      password: "Test1234!",
      firstName: "Test",
      lastName: "User",
      address: "123 Test Street",
      day: "2",
      month: "January",
      year: "1995",
      country: "United States",
      state: "Florida",
      city: "Los Angeles",
      zipcode: "90001",
      mobile: "1234567890",
    });
    RegisterPage.submitForm();

    // Assert
    RegisterPage.verifyAccountCreated();
  });
});
