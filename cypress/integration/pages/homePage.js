class HomePage {

  get product() {
    return `//ul[@id='homefeatured']/li`
  }
  get search() {
    return `input[id='search_query_top']`
  }
  get searchButton() {
    return `button[name='submit_search']`
  }
  get blouseProduct() {
    return `//a[@class='product-name'][contains(@title,'Blouse')]`
  }

  navigate(url) {
    cy.viewport(1000, 660);
    cy.visit(url);
  }

  productCount() {
    cy.xpath(this.product).should("have. length", 7);
  }

  productSearch() {
    cy.get(this.search).type('Blouse')
    cy.wait(300)
    cy.get(this.searchButton).click({ force: true })
    cy.xpath(this.blouseProduct).click()
  }

  productClick() {
    cy.wait(1000);
    cy.xpath(this.product).eq(0).click();
  }
}

const homePage = new HomePage();
export default homePage;
