import { Page } from "@playwright/test";

export class LoginPage {
    private page: Page;
    private usernameInput = "#username";
    private passwordInput = "#password";
    private loginButton = "#login";

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto("https://www.google.com/");
    }

    async login(username: string, password: string) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }

    async isDashboardVisible(): Promise<boolean> {
        return this.page.isVisible("#dashboard");
    }
}
