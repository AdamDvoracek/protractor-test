const { browser } = require("protractor");

const practiceForm = function() {

    this.firstName = element(by.id("firstName"));
    this.lastName = element(by.id("lastName"));
    this.email = element(by.id("userEmail"));
    this.mobile = element(by.id("userNumber"));
    this.dateOfBirth = element(by.id("dateOfBirthInput"));
    this.dateContainer = element(by.css("react-datepicker__month-container"));

    this.fillPersonalInfo = function(
        FirstName = "",
        LastName = "",
        Email = "",
        Mobile = ""
    ) {
        this.firstName.sendKeys(FirstName);
        this.lastName.sendKeys(LastName);
        this.email.sendKeys(Email);
        this.mobile.sendKeys(Mobile);
    }

    this.selectGender = function(gender = "male") {
        gender = gender.toUpperCase();
        if (gender === "MALE") {
            browser.driver.actions().mouseMove(element(by.id('gender-radio-1'))).click().perform();
        }
        else if (gender === "FEMALE") {
            browser.driver.actions().mouseMove(element(by.id('gender-radio-2'))).click().perform();
        }
        else if (gender === "OTHER"){
            browser.driver.actions().mouseMove(element(by.id('gender-radio-3'))).click().perform();
        } else {
            console.error("Error: Select only from available values: male, female, other");
        }
    }

    this.selectDate = function(year = "", month = "", day = "") {
        
        // Open datePicker container
        this.dateOfBirth.click();

        this.selectYear(year);
        this.selectMonth(month);
        this.selectDay(day);

    }

    this.selectDay = function(day) {

        day = parseInt(day);
        if (day <= 9) {
            let dayDate = element(by.css(".react-datepicker__day--00" + day));
            dayDate.click();
        } else {
            let dayDate = element(by.css(".react-datepicker__day--0" + day));
            dayDate.click();
        }
    }

    this.selectMonth = function(month) {
        String.prototype.capitalize = function() {
            return month.charAt(0).toUpperCase() + month.slice(1);
        }

        const monthDropdown = element(by.css(".react-datepicker__month-select"));
        monthDropdown.click();

        element(by.cssContainingText('option', month)).click();
    }

    this.selectYear = function(year) {
        const yearDropdown = element(by.css(".react-datepicker__year-select"));
        yearDropdown.click();

        element(by.cssContainingText('option', year)).click();
    }

};

module.exports = new practiceForm();