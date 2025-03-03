"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const test_1 = require("@playwright/test");
const login_page_1 = require("../pages/login.page");
const test_context_1 = require("../utils/test-context");
let loginPage;
(0, cucumber_1.Before)(async () => {
    await test_context_1.testContext.launchBrowser();
});
(0, cucumber_1.After)(async () => {
    await test_context_1.testContext.closeBrowser();
});
(0, cucumber_1.Given)("I navigate to the login page", async () => {
    if (!test_context_1.testContext.page)
        throw new Error("Page not initialized");
    loginPage = new login_page_1.LoginPage(test_context_1.testContext.page);
    await loginPage.navigate();
});
(0, cucumber_1.When)("I enter valid username and password", async () => {
    await loginPage.login("testuser", "password123");
});
(0, cucumber_1.When)("I click the login button", async () => {
    // Action đã thực hiện trong bước trước
});
(0, cucumber_1.Then)("I should see the dashboard", async () => {
    (0, test_1.expect)(await loginPage.isDashboardVisible()).toBe(true);
});
