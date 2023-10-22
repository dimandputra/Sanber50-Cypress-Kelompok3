class productPage{
    checkURL(){
        cy.url()
        .visit('/radiant-tee.html') 
    }
}
export default new productPage()