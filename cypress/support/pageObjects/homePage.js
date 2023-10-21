class homePage{
   createAccountbutton = '.panel > .header > :nth-child(3) > a'
   
   clickCreateAnAccount(){
    cy.get(this.createAccountbutton)
    .click()
}
}

export default new homePage()