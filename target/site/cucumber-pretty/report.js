$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Feature",
  "description": "This feature is for the login functionality of the application for Admin and Supplier",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 13833532408,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login with correct username and password for the admin",
  "description": "",
  "id": "login-feature;login-with-correct-username-and-password-for-the-admin",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "When I am on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the following details",
  "rows": [
    {
      "cells": [
        "userName",
        "pasword"
      ],
      "line": 7
    },
    {
      "cells": [
        "303admin",
        "12345678"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "i should see the  page title as \"Dashboard\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.when_I_am_on_login_page()"
});
formatter.result({
  "duration": 3225869073,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iEnterTheFollowingDetails(DataTable)"
});
formatter.result({
  "duration": 612161264,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_click_on_login_button()"
});
formatter.result({
  "duration": 3063163242,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard",
      "offset": 33
    }
  ],
  "location": "LoginTest.i_should_see_the_page_title_as_Dashboard(String)"
});
formatter.result({
  "duration": 41407790,
  "status": "passed"
});
formatter.after({
  "duration": 1791020563,
  "status": "passed"
});
formatter.before({
  "duration": 12576254407,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login with incorrect username and password for the admin",
  "description": "",
  "id": "login-feature;login-with-incorrect-username-and-password-for-the-admin",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "When I am on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I enter the following details",
  "rows": [
    {
      "cells": [
        "userName",
        "pasword"
      ],
      "line": 17
    },
    {
      "cells": [
        "303admi",
        "1234678"
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "i should not see the  page title as \"Users Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.when_I_am_on_login_page()"
});
formatter.result({
  "duration": 4286382899,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iEnterTheFollowingDetails(DataTable)"
});
formatter.result({
  "duration": 564568475,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_click_on_login_button()"
});
formatter.result({
  "duration": 3056825484,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Users Login",
      "offset": 37
    }
  ],
  "location": "LoginTest.iShouldNotSeeThePageTitleAs(String)"
});
formatter.result({
  "duration": 36100273,
  "status": "passed"
});
formatter.after({
  "duration": 1319639944,
  "status": "passed"
});
});