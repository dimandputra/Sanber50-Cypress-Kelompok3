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

}
export default new loginPage()
