class CartPage {
  private cartTable = () => cy.get("#cart_info_table");
  private cartProduct = (productName: string) =>
    this.cartTable().contains("td", productName);
  private removeButton = (productName: string) =>
    this.cartProduct(productName).parent().find(".cart_quantity_delete");
  private emptyCartMessage = () => cy.contains("Cart is empty!");

  visit(): void {
    cy.visit("/view_cart");
  }

  verifyProductInCart(productName: string): void {
    this.cartProduct(productName).should("be.visible");
  }

  removeProduct(productName: string): void {
    this.removeButton(productName).click();
    this.cartProduct(productName).should("not.exist");
  }

  verifyCartIsEmpty(): void {
    this.emptyCartMessage().should("be.visible");
  }
}

export default new CartPage();
