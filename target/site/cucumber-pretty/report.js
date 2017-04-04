$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Feature",
  "description": "This feature is for the login functionality of the application for Admin and Supplier",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 12231016879,
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
        "sajitha.r+nabcadmin@303software.com",
        "12121212"
      ],
      "line": 8
    },
    {
      "cells": [
        "sajitha.r+nabcadmin@303software.com",
        "12121212"
      ],
      "line": 9
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
  "name": "i should see the  page title as \"Users Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the tab users on the page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.when_I_am_on_login_page()"
});
formatter.result({
  "duration": 2974421018,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iEnterTheFollowingDetails(DataTable)"
});
formatter.result({
  "duration": 566166634,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_click_on_login_button()"
});
formatter.result({
  "duration": 52753073,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Users Login",
      "offset": 33
    }
  ],
  "location": "LoginTest.i_should_see_the_page_title_as_Dashboard(String)"
});
formatter.result({
  "duration": 22228503,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.the_tab_users_on_the_page()"
});
formatter.result({
  "duration": 3463765839,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"link text\",\"selector\":\"User\"}\nCommand duration or timeout: 226 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027Sajitha-PC\u0027, ip: \u002710.95.6.251\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d47.0.2, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 76a4466f-4888-40d2-b1b7-37da78689191\n*** Element info: {Using\u003dlink text, value\u003dUser}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:246)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat Steps.LoginTest.the_tab_users_on_the_page(LoginTest.java:66)\r\n\tat ✽.And the tab users on the page(login.feature:12)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"link text\",\"selector\":\"User\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027Sajitha-PC\u0027, ip: \u002710.95.6.251\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///C:/Users/Sajitha/AppData/Local/Temp/anonymous8522330154390827615webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10770)\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///C:/Users/Sajitha/AppData/Local/Temp/anonymous8522330154390827615webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10779)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///C:/Users/Sajitha/AppData/Local/Temp/anonymous8522330154390827615webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12661)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///C:/Users/Sajitha/AppData/Local/Temp/anonymous8522330154390827615webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12666)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///C:/Users/Sajitha/AppData/Local/Temp/anonymous8522330154390827615webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12608)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2042115065,
  "status": "passed"
});
});