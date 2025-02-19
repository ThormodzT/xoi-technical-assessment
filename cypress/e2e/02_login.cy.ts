import NavbarComponent from "../pages/common/navbar.component";
import HomePage from "../pages/home.page";
import LoginPage from "../pages/login.page";

describe("Login", () => {
  let testUser: { email: string; password: string };

  before(() => {
    cy.fixture("users").then((users) => {
      testUser = users.testUser;
    });
  });

  it("GIVEN a registered user is on the homepage, WHEN they navigate to login and enter valid credentials, THEN they should be redirected to the home page", () => {
    // Arrange
    HomePage.visit();
    NavbarComponent.visitSignupLogin();

    // Act
    cy.login(testUser.email, testUser.password);

    // Assert
    NavbarComponent.verifyUserLoggedIn("Test User");

    // Cleanup
    cy.logout();
  });

  it("GIVEN a user enters incorrect credentials, WHEN they attempt to log in, THEN they should see an error message", () => {
    // Arrange
    HomePage.visit();
    NavbarComponent.visitSignupLogin();

    // Act
    cy.visit("/login");
    LoginPage.login("invaliduser@example.com", "WrongPassword123!");

    // Assert
    LoginPage.validateErrorMessage("Your email or password is incorrect!");
  });
});

describe("Logout", () => {
  let testUser: { email: string; password: string };

  before(() => {
    cy.fixture("users").then((users) => {
      testUser = users.testUser;
    });
  });

  beforeEach(() => {
    cy.login(testUser.email, testUser.password);
  });

  it("GIVEN a logged in user, WHEN they log out using the navbar, THEN they should be redirected to the login page and session should be terminated", () => {
    // Act
    NavbarComponent.logout();

    // Assert
    cy.url().should("include", "/login");
  });
});
