class ProductDetailPage {
  
  get productDescription() {
    return `div[id="short_description_content"]`;
  }

  get addToCartButton() {
    return `//span[text()='Add to cart']`;
  }

  get itemInTheCart() {
    return `//span[contains(text(),'There is 1 item in your cart.')]`;
  }

  productDescriptionValidation() {
    cy.get(this.productDescription).should("be.visible");
  }

  addToCart() {
    cy.xpath(this.addToCartButton).click();
  }

  itemAddToCart() {
    cy.xpath(this.itemInTheCart).should("be.visible");
  }
}
const productDetailPage = new ProductDetailPage();
export default productDetailPage;
