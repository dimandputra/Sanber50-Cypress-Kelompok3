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
    clikProfileMenu(){
        cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action')
        .click()
    }

    clickSignOut(){
        cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a')
        .click()
    }

    checkURLSignOut(){
        cy.url()
        .should('include', '/account/logoutSuccess')
    }
}

export default new accountPage ()