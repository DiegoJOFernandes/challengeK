#language: pt

Funcionalidade: Compra

  Tem como objetivo validar se os produtos adicionados ao carrinho 
  de compras estão sendo listados corretamente na tela de pagamento.

  @userLoged
  Cenário: Usuário verifica produto adicionado ao carrinho na tela de pagamentos
    Dado o usuário está logado e na home page do site
    E ele realiza uma busca por produtos
    E ele adiciona um produto ao carrinho de compras
    Quando ele avaçar até a tela de pagamentos 
    Então ele deverá visualizar o mesmo produto listado na tela de pagamentos
  