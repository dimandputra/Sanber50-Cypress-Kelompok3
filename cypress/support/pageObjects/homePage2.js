class homePage2 {
    createLoginbutton = 'body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.authorization-link > a'

    clickSignin(){
        cy.get(this.createLoginbutton)
        .click()
    }

}
export default new homePage2()