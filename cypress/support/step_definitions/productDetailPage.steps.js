import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import homePage from "../../integration/pages/homePage";
import productDetailPage from "../../integration/pages/productDetailPage";

Given("Customer clicks on the product", () => {
  homePage.productClick();
});

Then("Customer navigates to Product detail page", () => {
  cy.title().should("eq", "Faded Short Sleeves T-shirt - Product reviews app");
});

And("Customer see the short discription of the product", () => {
  productDetailPage.productDescriptionValidation();
});

And("Customer adds the product to the cart", () => {
  productDetailPage.addToCart();
});

Then("Customer should see the modal box with the item added to the cart", () => {
    productDetailPage.itemAddToCart();
});
