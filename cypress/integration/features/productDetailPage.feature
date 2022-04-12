Feature: product detail page

    Scenario: Adding a Product to the cart
        Given Customer launches the url
        When Customer clicks on the product
        Then Customer navigates to Product detail page
        And Customer see the short discription of the product
        Then Customer adds the product to the cart
        And Customer should see the modal box with the item added to the cart