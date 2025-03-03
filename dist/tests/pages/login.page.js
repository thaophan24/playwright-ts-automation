"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
class LoginPage {
    page;
    usernameInput = "#username";
    passwordInput = "#password";
    loginButton = "#login";
    constructor(page) {
        this.page = page;
    }
    async navigate() {
        await this.page.goto("https://www.google.com/");
    }
    async login(username, password) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }
    async isDashboardVisible() {
        return this.page.isVisible("#dashboard");
    }
}
exports.LoginPage = LoginPage;
