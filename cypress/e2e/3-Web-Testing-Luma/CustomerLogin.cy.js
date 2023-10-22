describe('Web UI Magento Luma', () => {
    it('Failed Login Magento Luma - Email does not match', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
        cy.get('#email').type('Iqbal')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('password')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
        //cy.get('.mege-error').should('contain.text', 'Please enter a valid email address (Ex: johndoe@domain.com).') 
    })
    it('Failed Login Magento Luma - password does not match', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
        cy.get('#email').type('achmadnur.iqballll@gmail.com')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('1234')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
        cy.get('.message-error > div').should('contain.text', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.') 
    })
    it('Success Login Magento Luma', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
        cy.get('#email').type('achmadnur.iqballll@gmail.com')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Qwerty1234@')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
        cy.get('.title').should('be.visible') 
    })
})