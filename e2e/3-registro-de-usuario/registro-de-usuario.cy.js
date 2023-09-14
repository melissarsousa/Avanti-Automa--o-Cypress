/// <reference types="cypress" />

import { generateUserName } from "../../utils/generate-username";
import '/home/melissa/AvantiCypress/cypress/pages/RegisterPage/RegisterPage.js'
import '/home/melissa/AvantiCypress/cypress/pages/RegisterPage/RegisterElements.js'


describe('Cenário Registro de Usuários', () => {
    beforeEach(() => {
      cy.visit('https://parabank.parasoft.com/parabank/register.htm');
    })
   
  
      it.only('Validar Registro de Usuário com dados válidos', () => {
        cy.typeFirstName('Bergsa');
        cy.typeLastName('Miau');
        cy.typeAdressStreet('Casa da Bsa');
        cy.typeAdressCity('Fortaleza');
        cy.typeAdressState('Ceará');
        cy.typeAdressZipCode('111111');
        cy.typePhoneNumber('22222222');
        cy.typeSsn('111112222');
        cy.typeUserName(generateUserName());
        cy.typePassword('bsobso21');
        cy.typeRepeatPassword('bsobso21');

        cy.clickRegisterBtn();
        cy.confirmRegistration('Your account was created successfully. You are now logged in.').should('be.visible')
      })
  
      it('Validar Registro de Usuário com Username já existente', () => {
        cy.typeFirstName('Bergsa');
        cy.typeLastName('Miau');
        cy.typeAdressStreet('Casa da Bsa')
        cy.typeAdressCity('Fortaleza')
        cy.typeAdressState('Ceará');
        cy.typeAdressZipCode('111111');
        cy.typePhoneNumber('22222222');
        cy.typeSsn('111112222');
        cy.typeUserName('bsinha') //cy.typeUserName(generateUserName())
        cy.typePassword('bsobso21');
        cy.typeRepeatPassword('bsobso21');

        cy.clickRegisterBtn();
        cy.usernameError('This username already exists.').should('be.visible');
      })

      it('Validar Registro de Usuário sem First Name', () => {
        cy.typeLastName('Miau');
        cy.typeAdressStreet('Casa da Bsa')
        cy.typeAdressCity('Fortaleza')
        cy.typeAdressState('Ceará');
        cy.typeAdressZipCode('111111');
        cy.typePhoneNumber('22222222');
        cy.typeSsn('111112222');
        cy.typeUserName(generateUserName())
        cy.typePassword('bsobso21');
        cy.typeRepeatPassword('bsobso21');

        cy.clickRegisterBtn();
        cy.firstNameError('First name is required.');
      })

      it('Validar Registro de Usuário com espaço no First Name', () => {
        cy.typeFirstName(' ');
        cy.typeLastName('Miau');
        cy.get('input[id="customer.address.street"]').type('Casa do Bso');
        cy.get('input[id="customer.address.city"]').type('Fortal');
        cy.get('input[id="customer.address.state"]').type('CE');
        cy.get('input[id="customer.address.zipCode"]').type('111111');
        cy.get('input[id="customer.phoneNumber"]').type('22222222');
        cy.get('input[id="customer.ssn"]').type('1111112222');
        cy.get('input[id="customer.username"]').type(generateUserName());
        cy.get('input[id="customer.password"]').type('bsobso21');
        cy.get('input[id="repeatedPassword"]').type('bsobso21');

        cy.get('input[class="button"]').contains('Register').click();
        cy.get('span[id="customer.firstName.errors"]').contains('First name is required.') //irá falhar pois há falha que permite esse cenário.
      })

      it('Validar Comando Personalizado', () => {
        cy.nomeComando;
      })

    })