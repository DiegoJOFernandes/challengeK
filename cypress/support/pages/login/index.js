class LoginPage {
  visitPage(){
    cy.visit('controller=authentication&back=my-account')
  }

  userLogin() {
    cy.fixture('loginData').then((user)=> {
      cy.get('#email').type(user.email)
      cy.get('#passwd').type(user.password)
    })
    cy.get('#SubmitLogin').click()
  }

  verifyLogin() {
    cy.get('.account').should('be.visible')
    cy.get('.logout').should('be.visible')
  }
}

export default new LoginPage();
