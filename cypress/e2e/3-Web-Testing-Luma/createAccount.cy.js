import homePage from "../../support/pageObjects/homePage"
import createAccountPage from "../../support/pageObjects/createAccountpage"
import accountPage from "../../support/pageObjects/accountPage"
import RandomData from "../../support/test-Data/randomData"

describe('Verify Create an Account', () => {
    beforeEach(() => {
        cy.visit('')
        cy.wait(3000)
    })
    afterEach(() => {
        cy.clearAllSessionStorage
    })

    it('Failed Create an Account - Registered Email', () => {

        //home page
        homePage.clickCreateAnAccount()

        //create account page
        createAccountPage.inputFirstName('Dimas')
        createAccountPage.inputLastName('Putra')
        createAccountPage.inputEmailAddress('test@gmail.com')
        createAccountPage.inputPassword('Admin1234')
        createAccountPage.inputConfirmPassword('Admin1234')
        createAccountPage.clickCreateanAccountButton()

        //assert
        createAccountPage.getErrorMessage()

    })

    it('Failed Create an Account - Invalid Email Format', () => {

        //home page
        homePage.clickCreateAnAccount()

        //create account page
        createAccountPage.inputFirstName('Dimas')
        createAccountPage.inputLastName('Putra')
        createAccountPage.inputEmailAddress('jajalaja')
        createAccountPage.inputPassword('Admin1234')
        createAccountPage.inputConfirmPassword('Admin1234')
        createAccountPage.clickCreateanAccountButton()

        //assert
        createAccountPage.getEmailAddressError()

    })

    it('Failed Create an Account - Invalid Confirmation Password', () => {

        //home page
        homePage.clickCreateAnAccount()

        //create account page
        createAccountPage.inputFirstName('Dimas')
        createAccountPage.inputLastName('Putra')
        createAccountPage.inputEmailAddress(RandomData.generateRandomEmailAddress())
        createAccountPage.inputPassword('Admin1234')
        createAccountPage.inputConfirmPassword('Akuntes1')
        createAccountPage.clickCreateanAccountButton()

        //assert
        createAccountPage.getConfirmationPasswordError()

    })

    it('Failed Create an Account - Password less than 8 characters', () => {

        //home page
        homePage.clickCreateAnAccount()

        //create account page
        createAccountPage.inputFirstName('Dimas')
        createAccountPage.inputLastName('Putra')
        createAccountPage.inputEmailAddress(RandomData.generateRandomEmailAddress())
        createAccountPage.inputPassword('Akun')

        //assert
        createAccountPage.getPasswordErrorMessageLessThan8Characters()

    })
    //testcase ini masih di skip karena belum tau cara solvenya
    it.skip('Failed Create an Account - Password does not meet minimum requirement of 3 classes character', () => {

        //home page
        homePage.clickCreateAnAccount()

        //create account page
        createAccountPage.inputFirstName('Dimas')
        createAccountPage.inputLastName('Putra')
        createAccountPage.inputEmailAddress(RandomData.generateRandomEmailAddress())
        createAccountPage.inputPassword('12345678')

        //assert
        createAccountPage.getPasswordErrorMessageLessThan3ClassesCharacters()

    })

    it('Success Create an Account', () => {

        //home page
        homePage.clickCreateAnAccount()

        //create account page
        createAccountPage.inputFirstName('Dimas')
        createAccountPage.inputLastName('Putra')
        createAccountPage.inputEmailAddress(RandomData.generateRandomEmailAddress())
        createAccountPage.inputPassword('Admin1234')
        createAccountPage.inputConfirmPassword('Admin1234')
        createAccountPage.clickCreateanAccountButton()

        //assert
        accountPage.checkURL()
        accountPage.getMessageSuccess()

    })

})