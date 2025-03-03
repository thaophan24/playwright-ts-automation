import { Browser, BrowserContext, Page, chromium } from "@playwright/test";

class TestContext {
    private browser: Browser | null = null;
    private context: BrowserContext | null = null;
    public page: Page | null = null;

    async launchBrowser() {
        if (!this.browser) {
            this.browser = await chromium.launch({ headless: true });
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

export const testContext = new TestContext();
