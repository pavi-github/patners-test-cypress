Feature: Home Page

    Background: 
        Given Customer launches the url

    Scenario: Product Display
        Then Customer should see seven products by default

    Scenario: Product search
        When Customer searches for the product blouse
        Then Customer navigates to Blouse Product detail page