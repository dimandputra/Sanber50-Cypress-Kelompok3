class createAccountPage{
    firstNameField = '#firstname'
    lastNameField = '#lastname'
    emailAddressField = '#email_address'
    passwordField = '#password'
    confirmPasswordField = '#password-confirmation'
    createAccountbtn = '#form-validate > .actions-toolbar > div.primary > .action'
    errorMessage = '.message-error > div'
    invalidEmailFormat = '#email_address-error'
    invalidPasswordConfirmation = '#password-confirmation-error'
    passwordErrorMessage = '#password-error'

    inputFirstName(firstName){
        cy.get(this.firstNameField)
        .type(firstName)
    }
    inputLastName(lastName){
        cy.get(this.lastNameField)
        .type(lastName)
    }
    inputEmailAddress(emailAddress){
        cy.get(this.emailAddressField)
        .type(emailAddress)
    }
    inputPassword(password){
        cy.get(this.passwordField)
        .type(password)
    }
    inputConfirmPassword(confirmPassword){
        cy.get(this.confirmPasswordField)
        .type(confirmPassword)
    }
    clickCreateanAccountButton(){
        cy.get(this.createAccountbtn)
        .click()
    }

    getErrorMessage(){
        cy.get(this.errorMessage)
        .should('contain.text', 'There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.')
    }

    getEmailAddressError(){
        cy.get(this.invalidEmailFormat)
        .should('contain.text', 'Please enter a valid email address (Ex: johndoe@domain.com).')
    }

    getConfirmationPasswordError(){
        cy.get(this.invalidPasswordConfirmation)
        .should('contain.text', 'Please enter the same value again.')
    }
    
    getPasswordErrorMessageLessThan8Characters(){
        cy.get(this.passwordErrorMessage)
        .should('contain.text', 'Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.')
    }

    getPasswordErrorMessageLessThan3ClassesCharacters(){
        cy.get(this.passwordErrorMessage)
        .should('contain text', 'Minimum of different classes of characters in password is 3')
    }
}


export default new createAccountPage ()