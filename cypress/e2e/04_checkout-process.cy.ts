import NavbarComponent from "../pages/common/navbar.component";
import ProductsPage from "../pages/products.page";
import CartPage from "../pages/cart.page";
import CheckoutPage from "../pages/checkout.page";
import PaymentPage from "../pages/payment.page";

describe("Checkout Process", () => {
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

  afterEach(() => {
    cy.removeProductIfPresent(productName);
  });

  after(() => {
    cy.logout();
  });

  it("GIVEN a logged-in user with a product in the cart, WHEN they proceed to checkout and complete the payment, THEN the order should be placed successfully", () => {
    // Arrange
    NavbarComponent.visitProducts();

    // Act
    ProductsPage.searchProduct(productName);
    ProductsPage.addToCart(productName);
    ProductsPage.goToCart();
    CartPage.verifyProductInCart(productName);

    CheckoutPage.proceedToCheckout();
    CheckoutPage.addComment("This is a test");
    CheckoutPage.placeOrder();
    PaymentPage.enterPaymentDetails(
      "Test User",
      "4111111111111111",
      "123",
      "12",
      "2025"
    );
    PaymentPage.confirmPayment();

    // Assert
    PaymentPage.verifyOrderSuccess();
  });
});
