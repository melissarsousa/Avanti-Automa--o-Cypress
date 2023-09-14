Cypress.Commands.add('typeFirstName', (firstName) => {
    cy.get('input[id="customer.firstName"]').type(firstName);
});

Cypress.Commands.add('typeLastName', (lastName) => {
    cy.get('input[id="customer.lastName"]').type(lastName);
});

Cypress.Commands.add('typeAdressStreet', (adressStreet) => {
    cy.get('input[id="customer.address.street"]').type(adressStreet);
});

Cypress.Commands.add('typeAdressCity', (adressCity) => {
    cy.get('input[id="customer.address.city"]').type(adressCity);
});

Cypress.Commands.add('typeAdressState', (adressState) => {
    cy.get('input[id="customer.address.state"]').type(adressState);
});

Cypress.Commands.add('typeAdressZipCode', (adressZipCode) => {
    cy.get('input[id="customer.address.zipCode"]').type(adressZipCode);
});

Cypress.Commands.add('typePhoneNumber', (phoneNumber) => {
    cy.get('input[id="customer.phoneNumber"]').type(phoneNumber);
});

Cypress.Commands.add('typeSsn', (ssn) => {
    cy.get('input[id="customer.ssn"]').type(ssn);
});

Cypress.Commands.add('typeUserName', (username) => {
    cy.get('input[id="customer.username"]').type(username)
});

Cypress.Commands.add('typePassword', (password) => {
    cy.get('input[id="customer.password"]').type(password);
});

Cypress.Commands.add('typeRepeatPassword', (repeatPassword) => {
    cy.get('input[id="repeatedPassword"]').type(repeatPassword);
});

Cypress.Commands.add('clickRegisterBtn', () => {
    cy.get('input[class="button"]').contains('Register').click();
});

Cypress.Commands.add('confirmRegistration', (confirmation) => {
    cy.get('#rightPanel').contains(confirmation);
});

Cypress.Commands.add('usernameError', (errorText) => {
    cy.get('span[id="customer.username.errors"]').contains(errorText);
});

Cypress.Commands.add('firstNameError', (errorText) => {
    cy.get('span[id="customer.firstName.errors"]').contains(errorText);
});
