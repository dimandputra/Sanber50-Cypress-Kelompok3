import loginPage from "../../support/pageObjects/loginPage"

describe('Verify Login', () => {
    it('Failed Login Magento Luma - Email does not match', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
        cy.get(loginPage.emailAddressField).type('Iqbal')
        cy.get(loginPage.passwordField).type('password')
        cy.get(loginPage.signinBtn).click()
        //cy.get('.mege-error').should('contain.text', 'Please enter a valid email address (Ex: johndoe@domain.com).') 
    })
    it('Failed Login Magento Luma - Password does not match', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
        cy.get('#email').type('achmadnur.iqballll@gmail.com')
        cy.get('#pass').type('1234')
        cy.get('#send2 > span').click()
        cy.get('.message-error > div').should('contain.text', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.') 
    })
    it('Success Login Magento Luma', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
        cy.get('#email').type('achmadnur.iqballll@gmail.com')
        cy.get('#pass').type('Qwerty1234@')
        cy.get('#send2 > span').click()
        cy.get('.title').should('be.visible') 
    })
})