import NavbarComponent from "../pages/common/navbar.component";
import ProductsPage from "../pages/products.page";
import CartPage from "../pages/cart.page";

describe("Add Item to Cart", () => {
  let testUser: { email: string; password: string };
  const productName = "GRAPHIC DESIGN MEN T SHIRT - BLUE";

  before(() => {
    cy.fixture("users").then((users) => {
      testUser = users.testUser;
    });
  });

  beforeEach(() => {
    cy.login(testUser.email, testUser.password);
    CartPage.visit();
    CartPage.verifyCartIsEmpty();
  });

  after(() => {
    cy.logout();
  });

  it("GIVEN a logged-in user is on the homepage, WHEN they search for a product and add it to the cart, THEN the cart should contain the selected item", () => {
    // Arrange
    NavbarComponent.visitProducts();

    // Act
    ProductsPage.searchProduct(productName);
    ProductsPage.addToCart(productName);
    ProductsPage.goToCart();

    // Assert
    CartPage.verifyProductInCart(productName);

    // Cleanup
    cy.removeProductIfPresent(productName);
  });
});
