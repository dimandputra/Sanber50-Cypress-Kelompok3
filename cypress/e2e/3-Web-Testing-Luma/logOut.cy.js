import loginPage from "../../support/pageObjects/loginPage";
import accountPage from "../../support/pageObjects/accountPage";

describe('Verify Log Out', () =>{
    it('Success Log Out', () => {
        loginPage.login()
        cy.wait(3000)
        accountPage.clikProfileMenu()
        accountPage.clickSignOut()
        accountPage.checkURLSignOut()
    })
})