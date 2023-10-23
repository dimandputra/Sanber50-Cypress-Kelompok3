class homePage{
   createAccountbutton = '.panel > .header > :nth-child(3) > a'
   createLoginbutton = 'body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.authorization-link > a'

   clickCreateAnAccount(){
    cy.get(this.createAccountbutton)
    .click()
}

clickSignin(){
    cy.get(this.createLoginbutton)
    .click()
}

}

export default new homePage()