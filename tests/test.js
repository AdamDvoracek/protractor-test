const { browser, element } = require("protractor");
const practiceForm = require("../page_objects/practiceForm");

// Run test by protractor protractor.conf.js

describe("Demo suite", function() {

    const baseUrl = "https://demoqa.com/";
    const date = new Date();

    it("Demo test", function() {


        browser.waitForAngularEnabled(false);
        browser.get(baseUrl + "automation-practice-form");

        practiceForm.fillPersonalInfo("Thomas", "Cook", "Thomas.Cook@yahoo.com", "788990886");
        practiceForm.selectGender("male");

        practiceForm.fillPersonalInfo();

        practiceForm.dateOfBirth.click();

        practiceForm.selectDate("2020", "January", "11");

        browser.sleep(10000);


    });

});