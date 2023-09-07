/// <reference types="cypress" />

import { generateFirstName } from "../../utils/generate-first-name";

describe('Cenário Registro de Usuários', () => {
    beforeEach(() => {
      cy.visit('https://parabank.parasoft.com/parabank/register.htm');
    })
   
  
      it('Validar Registro de Usuário com dados válidos', () => {
        cy.get('input[id="customer.firstName"]').type('Bergson');
        cy.get('input[id="customer.lastName"]').type('Miau');
        cy.get('input[id="customer.address.street"]').type('Casa do Bso');
        cy.get('input[id="customer.address.city"]').type('Fortal');
        cy.get('input[id="customer.address.state"]').type('CE');
        cy.get('input[id="customer.address.zipCode"]').type('111111');
        cy.get('input[id="customer.phoneNumber"]').type('22222222');
        cy.get('input[id="customer.ssn"]').type('1111112222');
        cy.get('input[id="customer.username"]').type('bsinho12'); //.type(generateFirstName())
        cy.get('input[id="customer.password"]').type('bsobso21');
        cy.get('input[id="repeatedPassword"]').type('bsobso21');

        cy.get('input[class="button"]').contains('Register').click();
        cy.get('#rightPanel').contains('Your account was created successfully. You are now logged in.')
      })
  
      it('Validar Registro de Usuário com Username já existente', () => {
        cy.get('input[id="customer.firstName"]').type('Bergson');
        cy.get('input[id="customer.lastName"]').type('Miau');
        cy.get('input[id="customer.address.street"]').type('Casa do Bso');
        cy.get('input[id="customer.address.city"]').type('Fortal');
        cy.get('input[id="customer.address.state"]').type('CE');
        cy.get('input[id="customer.address.zipCode"]').type('111111');
        cy.get('input[id="customer.phoneNumber"]').type('22222222');
        cy.get('input[id="customer.ssn"]').type('1111112222');
        cy.get('input[id="customer.username"]').type('bsinho12'); //cenário funciona somente se já tiver feito o registro anteriormente
        cy.get('input[id="customer.password"]').type('bsobso21');
        cy.get('input[id="repeatedPassword"]').type('bsobso21');

        cy.get('input[class="button"]').contains('Register').click();
        cy.get('span[id="customer.username.errors"]').contains('This username already exists.');
      })

      it('Validar Registro de Usuário sem First Name', () => {
        cy.get('input[id="customer.lastName"]').type('Miau');
        cy.get('input[id="customer.address.street"]').type('Casa do Bso');
        cy.get('input[id="customer.address.city"]').type('Fortal');
        cy.get('input[id="customer.address.state"]').type('CE');
        cy.get('input[id="customer.address.zipCode"]').type('111111');
        cy.get('input[id="customer.phoneNumber"]').type('22222222');
        cy.get('input[id="customer.ssn"]').type('1111112222');
        cy.get('input[id="customer.username"]').type(generateFirstName()); 
        cy.get('input[id="customer.password"]').type('bsobso21');
        cy.get('input[id="repeatedPassword"]').type('bsobso21');

        cy.get('input[class="button"]').contains('Register').click();
        cy.get('span[id="customer.firstName.errors"]').contains('First name is required.')
      })

      it('Validar Registro de Usuário com espaço no First Name', () => {
        cy.get('input[id="customer.firstName"]').type(' ');
        cy.get('input[id="customer.lastName"]').type('Miau');
        cy.get('input[id="customer.address.street"]').type('Casa do Bso');
        cy.get('input[id="customer.address.city"]').type('Fortal');
        cy.get('input[id="customer.address.state"]').type('CE');
        cy.get('input[id="customer.address.zipCode"]').type('111111');
        cy.get('input[id="customer.phoneNumber"]').type('22222222');
        cy.get('input[id="customer.ssn"]').type('1111112222');
        cy.get('input[id="customer.username"]').type(generateFirstName());
        cy.get('input[id="customer.password"]').type('bsobso21');
        cy.get('input[id="repeatedPassword"]').type('bsobso21');

        cy.get('input[class="button"]').contains('Register').click();
        cy.get('span[id="customer.firstName.errors"]').contains('First name is required.') //irá falhar pois há falha que permite esse cenário.
      })

    })