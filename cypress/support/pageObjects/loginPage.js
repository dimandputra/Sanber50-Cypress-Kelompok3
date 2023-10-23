class loginPage{
    emailAddressField = '#email'
    passwordField = '#pass'
    signinBtn = '#send2 > span'

    inputEmail2(emailAddress){
        cy.get(this.emailAddressField)
        .type(emailAddress)
    }
    inputPassword2(password){
        cy.get(this.passwordField)
        .type(password)
    }
    clickSignInButton(){
        cy.get(this.signinBtn)
        .click()
    }

    login(){
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
        cy.get(this.emailAddressField).type('achmadnur.iqballll@gmail.com')
        cy.get(this.passwordField).type('Qwerty1234@')
        cy.get(this.signinBtn).click()
        cy.get('.title').should('be.visible') 
    }
    
}
export default new loginPage()