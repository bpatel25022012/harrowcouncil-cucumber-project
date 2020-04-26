$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/uk/harrow/gov/resources/featurefile/counciltax.feature");
formatter.feature({
  "line": 3,
  "name": "CouncilTax page feature",
  "description": "As a user I want to navigate to council tax page into harrow council website",
  "id": "counciltax-page-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@CouncilTax"
    }
  ]
});
formatter.before({
  "duration": 15773005700,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should navigate to council tax page successfully",
  "description": "",
  "id": "counciltax-page-feature;user-should-navigate-to-council-tax-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on council tax link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should navigate to council tax apge successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "CouncilTaxSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 242991500,
  "status": "passed"
});
formatter.match({
  "location": "CouncilTaxSteps.iClickOnCouncilTaxLink()"
});
formatter.result({
  "duration": 1356204799,
  "status": "passed"
});
formatter.match({
  "location": "CouncilTaxSteps.iShouldNavigateToCouncilTaxApgeSuccessfully()"
});
formatter.result({
  "duration": 124920299,
  "status": "passed"
});
formatter.after({
  "duration": 1185033300,
  "status": "passed"
});
formatter.before({
  "duration": 12656669700,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User should navigate to login page from single person discount page successfully",
  "description": "",
  "id": "counciltax-page-feature;user-should-navigate-to-login-page-from-single-person-discount-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on council tax link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on single person discount link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on apply button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should navigate to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "CouncilTaxSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 60000,
  "status": "passed"
});
formatter.match({
  "location": "CouncilTaxSteps.iClickOnCouncilTaxLink()"
});
formatter.result({
  "duration": 1227148000,
  "status": "passed"
});
formatter.match({
  "location": "CouncilTaxSteps.iClickOnSinglePersonDiscountLink()"
});
formatter.result({
  "duration": 11074177399,
  "status": "passed"
});
formatter.match({
  "location": "CouncilTaxSteps.iClickOnApplyButton()"
});
formatter.result({
  "duration": 12769566600,
  "status": "passed"
});
formatter.match({
  "location": "CouncilTaxSteps.iShouldNavigateToLoginPage()"
});
formatter.result({
  "duration": 116199200,
  "status": "passed"
});
formatter.after({
  "duration": 932735199,
  "status": "passed"
});
formatter.uri("src/test/java/uk/harrow/gov/resources/featurefile/login.feature");
formatter.feature({
  "line": 3,
  "name": "Login feature",
  "description": "As a user I want to login into harrow council website",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 12597230500,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-feature;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on login and register link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should navigate to login and register page",
  "keyword": "Then "
});
formatter.match({
  "location": "CouncilTaxSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 164100,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnLoginAndRegisterLink()"
});
formatter.result({
  "duration": 12587463901,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iShouldNavigateToLoginAndRegisterPage()"
});
formatter.result({
  "duration": 107481300,
  "status": "passed"
});
formatter.after({
  "duration": 907228100,
  "status": "passed"
});
formatter.before({
  "duration": 12631052700,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User should not login with invalid credentials",
  "description": "",
  "id": "login-feature;user-should-not-login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on login and register link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter email \"abc123@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"abc786\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the error message",
  "keyword": "Then "
});
formatter.match({
  "location": "CouncilTaxSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 61900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnLoginAndRegisterLink()"
});
formatter.result({
  "duration": 12613808600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginPageSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 308339101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc786",
      "offset": 18
    }
  ],
  "location": "LoginPageSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 200459801,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 895249700,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iShouldSeeTheErrorMessage()"
});
formatter.result({
  "duration": 81413301,
  "status": "passed"
});
formatter.after({
  "duration": 869306699,
  "status": "passed"
});
});