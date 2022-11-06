class HomePage {
  visitPage(){
    cy.visit('/')
  }

  accessLogin() {
    cy.get('.login').click()
  }

}

export default new HomePage();
