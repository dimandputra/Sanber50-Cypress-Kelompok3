// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//

// -- Pilih Product --
Cypress.Commands.add('selectProductByName', (productName) => {
    cy.get('#maincontent > div.columns > div.column.main > div.products.wrapper.grid.products-grid > ol') // selector product
      .contains(productName)
      .click();
  });

// -- List Product --
Cypress.Commands.add('getProductList', () => {
    return cy.get('#maincontent > div.columns > div.column.main > div.products.wrapper.grid.products-grid > ol');
});

// -- Login Custom -- 
Cypress.Commands.add ('Ketik', (locator, value) => {
  cy.get(locator).clear().type(value)
})

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })