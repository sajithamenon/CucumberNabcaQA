Feature: Login Feature
  This feature is for the login functionality of the application for Admin and Supplier

  Scenario: Login with correct username and password for the admin
    Given When I am on login page
    And I enter the following details
      | userName                            | pasword  |
     | 303admin | 12345678 |

    And I click on login button
    Then i should see the  page title as "Dashboard"


    Scenario: Login with incorrect username and password for the admin
      Given When I am on login page
      And I enter the following details
        | userName                            | pasword  |
        | 303admi | 1234678 |

      And I click on login button
      Then i should not see the  page title as "Users Login"



