import homePage2 from "../../support/pageObjects/homePage2"
import loginPage from "../../support/pageObjects/loginPage"
import productPage from "../../support/pageObjects/productPage"
import RandomData from "../../support/test-Data/randomData"

describe('Verify Login', () => {
    beforeEach(() => {
        cy.visit('')
        cy.wait(3000)
    })
    afterEach(() => {
        cy.clearAllSessionStorage
    })

    it('Choose Product Success', () => {
        
        homePage2.clickSignin()

        loginPage.inputEmail2('rizkigoal23@gmail.com')
        loginPage.inputPassword2('Rizkipebrian123')
        loginPage.clickSignInButton()

        productPage.checkURL()
    })
}
)
