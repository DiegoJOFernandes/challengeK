class CheckoutPage {
  assertCheckoutPage() {
    cy.url().should("contain", "controller=order");
  }

  clickProceedToCheckoutModal() {
    cy.get(".button-container > .button-medium")
      .contains("Proceed to checkout")
      .click({ force: true });
  }

  clickProceedToCheckout() {
    cy.get(".cart_navigation > .button")
      .contains("Proceed to checkout")
      .click();
  }

  passSummary() {
    cy.get(".step_current > span").should("contain", "Summary");
    this.clickProceedToCheckout();
  }

  passAddress() {
    cy.get(".step_current > span").should("contain", "Address");
    this.clickProceedToCheckout();
  }

  passShipping() {
    cy.get(".step_current > span").should("contain", "Shipping");
    cy.get("#cgv").check().should("be.checked");
    this.clickProceedToCheckout();
  }

  advanceToPayment() {
    this.passSummary();
    this.passAddress();
    this.passShipping();
  }

  assertProductAddCartStepPayment() {
    cy.get("@priceProduct").then((priceProduct) => {
      cy.get(".cart_unit > .price > span").should(
        "include.text",
        priceProduct.replace(/[\t+\n]/g, "")
      );
    });
    cy.get("@productName").then((productName) => {
      cy.get(".cart_description > .product-name > a").should(
        "contain.text",
        productName.replace(/[\t+\n]/g, "")
      );
    });
  }
}

export default new CheckoutPage();
