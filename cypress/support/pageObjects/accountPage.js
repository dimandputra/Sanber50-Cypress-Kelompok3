class accountPage{

    successMessage = '.message-success > div'
    
    checkURL(){
        cy.url()
        .should('include', '/customer/account') 
    }

    getMessageSuccess(){
        cy.get(this.successMessage)
        .should('contain.text', 'Thank you for registering with Main Website Store.')
    }
}

export default new accountPage ()