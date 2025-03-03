"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testContext = void 0;
const test_1 = require("@playwright/test");
class TestContext {
    browser = null;
    context = null;
    page = null;
    async launchBrowser() {
        if (!this.browser) {
            this.browser = await test_1.chromium.launch({ headless: true });
        }
        if (!this.context) {
            this.context = await this.browser.newContext();
        }
        if (!this.page) {
            this.page = await this.context.newPage();
        }
    }
    async closeBrowser() {
        if (this.page) {
            await this.page.close();
            this.page = null;
        }
        if (this.context) {
            await this.context.close();
            this.context = null;
        }
        if (this.browser) {
            await this.browser.close();
            this.browser = null;
        }
    }
}
exports.testContext = new TestContext();
