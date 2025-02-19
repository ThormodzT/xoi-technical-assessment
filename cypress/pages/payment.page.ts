class PaymentPage {
  private nameOnCard = () => cy.get("input[name='name_on_card']");
  private cardNumber = () => cy.get("input[name='card_number']");
  private cvc = () => cy.get("input[name='cvc']");
  private expiryMonth = () => cy.get("input[name='expiry_month']");
  private expiryYear = () => cy.get("input[name='expiry_year']");
  private payButton = () => cy.contains("Pay and Confirm Order");
  private orderSuccessMessage = () => cy.contains("Order Placed!");

  enterPaymentDetails(
    name: string,
    cardNumber: string,
    cvc: string,
    expMonth: string,
    expYear: string
  ): void {
    this.nameOnCard().type(name);
    this.cardNumber().type(cardNumber);
    this.cvc().type(cvc);
    this.expiryMonth().type(expMonth);
    this.expiryYear().type(expYear);
  }

  confirmPayment(): void {
    this.payButton().click();
  }

  verifyOrderSuccess(): void {
    this.orderSuccessMessage().should("be.visible");
  }
}

export default new PaymentPage();
