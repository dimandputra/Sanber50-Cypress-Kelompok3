import loginPage from "../../support/pageObjects/loginPage"

describe('Verify Login', () => {
    it('Failed Login Magento Luma - Email does not match', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
        cy.get(loginPage.emailAddressField).type('Iqbal')
        cy.get(loginPage.passwordField).type('password')
        cy.get(loginPage.signinBtn).click()
        //cy.get('#email-error').should('contain.text', 'Please enter a valid email address (Ex: johndoe@domain.com).') 
    })
    it('Failed Login Magento Luma - Password does not match', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
        cy.get(loginPage.emailAddressField).type('achmadnur.iqballll@gmail.com')
        cy.get(loginPage.passwordField).type('123456')
        cy.get(loginPage.signinBtn).click()
        cy.get('.message-error > div').should('contain.text', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.') 
    })
    it('Failed Login Magento Luma - Custom Command', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
        cy.get(loginPage.emailAddressField).type('achmadnur.iqballll@gmail.com')
        //Custom Login
        cy.Ketik(loginPage.passwordField, '1234')
        cy.get(loginPage.signinBtn).click()
        cy.get('.message-error > div').should('contain.text', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.') 
    })
    it('Success Login Magento Luma', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
        loginPage.inputEmail2('achmadnur.iqballll@gmail.com')
        loginPage.inputPassword2('Qwerty1234@')
        cy.get(loginPage.signinBtn).click()
        cy.get('.title').should('be.visible') 
    })
})