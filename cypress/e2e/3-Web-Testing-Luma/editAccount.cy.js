describe('Edit Account - Change Password', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
    })
    it('Success to edit my profile - Use Right current-password', () => {
        cy.get('#email').type('montanagurning913@gmail.com')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type("@QAsanbercode50")
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
        cy.wait(6000)
        cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
        cy.get('#change-password').click()
        cy.wait(6000)
        cy.get('#current-password').type('@Qasanbercode50')
        cy.get('#password').type("@Montanasanbercode50")
        cy.get('#password-confirmation').type("@Montanasanbercode50")
        cy.wait(6000)
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    })

    it('Not Success to edit my profile - Use Wrong current-password', () => {
        cy.get('#email').type('montanagurning913@gmail.com')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type("@Montanasanbercode50")
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
        cy.wait(6000)
        cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
        cy.get('#change-password').click()
        cy.wait(6000)
        cy.get('#current-password').type('@Qasanbercode50')
        cy.get('#password').type("@Qasanbercode50")
        cy.get('#password-confirmation').type("@Qasanbercode50")
        cy.wait(6000)
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click() // Muncul Pop Up "The password doesn't match this account. Verify the password and try again."
    })
})