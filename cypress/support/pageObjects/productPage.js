class productPage{
  
    checkURL(){
        cy.url()
        .visit('/radiant-tee.html') 
    }

    productPageUrl(){
        cy.url()
        .visit('women/tops-women/jackets-women.html') //url halaman produk
    }

    getProductTitle() {
        return cy.get('#maincontent > div.columns > div > div.product-info-main > div.page-title-wrapper.product > h1 > span'); //judul produk
    }
    
    getProductList() {
        return cy.get('#maincontent > div.columns > div.column.main > div.products.wrapper.grid.products-grid > ol'); //selector list product 
    }
    
    
    selectProductByName(productName) {
        this.getProductList()
          .should('contain', productName)
          .contains(productName)
          .click();
    }

    checkProductURLandTitle(selectedProductName) {
        const slugUrl = selectedProductName
           .replace(/\s+/g, '-').toLowerCase() + '.html'; // Verifikasi url lalu memformat nama produk agar sesuai dengan Slug URL
           cy.url()
           .should('include', slugUrl);
        this.getProductTitle()
           .should('contain', selectedProductName);
    }

}
export default new productPage()