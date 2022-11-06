/// <reference types="cypress" />
const { Before } = require('cypress-cucumber-preprocessor/steps')
import home from '../../../support/pages/home/index'
import login from '../../../support/pages/login/index'

Before({ tags: '@userLoged' }, () => {
  cy.visit('/')
  home.accessLogin()
  login.userLogin()
  login.verifyLogin()
})