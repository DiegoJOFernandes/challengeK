import home from "../../support/pages/home/index";
import search from "../../support/pages/search/index";
import checkout from "../../support/pages/checkout/index";

Given(/^o usuário está logado e na home page do site$/, () => {
  home.visitPage();
});

And(/^ele realiza uma busca por produtos$/, () => {
  search.searchForProduct();
  search.assertSearchResult();
});

And(/^ele adiciona um produto ao carrinho de compras$/, () => {
  search.addProductToCart();
  search.assertModalProductAdditionToCart();
});

When(/^ele avaçar até a tela de pagamentos$/, () => {
  checkout.clickProceedToCheckoutModal();
  checkout.advanceToPayment();
});

Then(/^ele deverá visualizar o mesmo produto listado na tela de pagamentos$/, () => {
  checkout.assertProductAddCartStepPayment();
});
