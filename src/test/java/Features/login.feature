Feature: Login Feature
  This feature is for the login functionality of the application for Admin and Supplier

  Scenario: Login with correct username and password for the admin
    Given When I am on login page
    And I enter the following details
      | userName                            | pasword  |
      | sajitha.r+nabcadmin@303software.com | 12121212 |
      | sajitha.r+nabcadmin@303software.com | 12121212 |
    And I click on login button
    Then i should see the  page title as "Users Login"
    And the tab users on the page