class SearchResultPage {
  fillSearchBar(term) {
    cy.get("#search_query_top").type(term).invoke("val").as("searchTerm");
  }

  searchForProduct() {
    cy.fixture("productList").then((term) => {
      const sortProductName = term.products[Math.floor(Math.random() * 2)];
      this.fillSearchBar(sortProductName);
    });
    cy.get("#searchbox > .btn").click();
  }

  assertSearchResult() {
    cy.get("@searchTerm").then((term) => {
      cy.get(".lighter").should("contain", `"${term}"`);
    });
  }

  getProductCardData() {
    cy.get(".product-name").invoke("text").as("productName");
    cy.get(".price").eq(1).invoke("text").as("priceProduct");
    cy.get(".replace-2x").invoke("attr", "src").as("productImage");
  }

  clickAddToCart() {
    cy.get('[title="Add to cart"]').click({ force: true });
  }

  addProductToCart() {
    cy.get(".ajax_block_product")
      .eq(0)
      .trigger("mouseover")
      .within(() => {
        this.getProductCardData();
        this.clickAddToCart();
      });
  }

  assertModalProductAdditionToCart() {
    cy.get(".layer_cart_product > h2").should(
      "contain.text",
      "Product successfully added to your shopping cart"
    );
  }
}

export default new SearchResultPage();
