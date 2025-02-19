class ProductsPage {
  private searchBox = () => cy.get("#search_product");
  private searchButton = () => cy.get("#submit_search");
  private productItem = (productName: string) =>
    cy.contains(".productinfo p", productName);
  private addToCartButton = (productName: string) =>
    this.productItem(productName).parent().find(".add-to-cart");
  private viewCartButton = () => cy.get("#cartModal a[href='/view_cart']");

  visit(): void {
    cy.visit("/products");
  }

  searchProduct(productName: string): void {
    this.searchBox().type(productName);
    this.searchButton().click();
  }

  addToCart(productName: string): void {
    this.addToCartButton(productName).click();
    cy.contains("Added").should("be.visible");
  }

  goToCart(): void {
    this.viewCartButton().click();
  }
}

export default new ProductsPage();
