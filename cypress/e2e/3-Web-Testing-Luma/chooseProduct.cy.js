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

    it('Choose Product Success without login', () => {
        const selectedProductName = 'Juno Jacket'; // nama produk pada list product *harus sesuai

        productPage.productPageUrl()
        cy.wait(2000) // tunggu 2 detik
        productPage.getProductList()
        .should('be.visible');
        cy.wait(2000)
        productPage.selectProductByName(selectedProductName)
      });
      it('Validating Successful Product Selection and URL Slug', () => {
        const selectedProductName = 'Jade Yoga Jacket';

        productPage.productPageUrl()
        cy.wait(2000)
        productPage.getProductList()
        .should('be.visible');
        cy.wait(1000) 
        productPage.selectProductByName(selectedProductName)
        productPage.checkProductURLandTitle(selectedProductName);
      });
    
}
)

