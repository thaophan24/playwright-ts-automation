import { Given, When, Then, Before, After } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { testContext } from "../utils/test-context";

let loginPage: LoginPage;

Before(async () => {
    await testContext.launchBrowser();
});

After(async () => {
    await testContext.closeBrowser();
});

Given("I navigate to the login page", async () => {
    if (!testContext.page) throw new Error("Page not initialized");
    loginPage = new LoginPage(testContext.page);
    await loginPage.navigate();
});

When("I enter valid username and password", async () => {
    await loginPage.login("testuser", "password123");
});

When("I click the login button", async () => {
    // Action đã thực hiện trong bước trước
});

Then("I should see the dashboard", async () => {
    expect(await loginPage.isDashboardVisible()).toBe(true);
});
