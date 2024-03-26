Feature('example');

Scenario('test something',  ({ I }) => {
    I.amOnPage('https://dev.alignwell.com/login')
    I.see(`Getting started is Quick and simple,
    Just fill out form below`)
    I.fillField('//input[@placeholder="Email/Username"]',"johnshaver@yopmail.com")
    I.fillField('//input[@placeholder="Password"]',"Test@1234")
    I.click('//button[@class="btn btn-outline-c8c8 border-left-0"]')
    I.wait(3)
    I.click('//button[text()=" Submit "]')
    I.waitForClickable('//button[text()=" Submit "]')
    I.wait(3)
    I.openNewTab()
    I.amOnPage('https://yopmail.com/')
    I.fillField('//input[@placeholder="Enter your inbox here"]',"johnshaver@yopmail.com")
    I.click('//i[@class="material-icons-outlined f36"]')
    I.wait(3)
    I.switchToPreviousTab()
    I.wait(3)
    // I.dontSee(`Getting started is Quick and simple,
    // Just fill out form below`)
});
