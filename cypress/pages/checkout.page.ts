class CheckoutPage {
  private checkoutButton = () => cy.contains("Proceed To Checkout");
  private commentBox = () => cy.get("textarea[name='message']");
  private placeOrderButton = () => cy.contains("Place Order");

  visit(): void {
    cy.visit("/view_cart");
  }

  proceedToCheckout(): void {
    this.checkoutButton().click();
  }

  addComment(comment: string): void {
    this.commentBox().type(comment);
  }

  placeOrder(): void {
    this.placeOrderButton().click();
  }
}

export default new CheckoutPage();
