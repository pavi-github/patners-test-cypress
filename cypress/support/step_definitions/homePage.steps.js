import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import homePage from '../../integration/pages/homePage';

Given("Customer launches the url", () => {
  homePage.navigate("/");
});

Then("Customer should see seven products by default", () => {
  homePage.productCount
});

When("Customer searches for the product blouse", () => {
  homePage.productSearch();
});

Then("Customer navigates to Blouse Product detail page", () => {
  cy.title().should("eq", "Blouse - Product reviews app");
});
