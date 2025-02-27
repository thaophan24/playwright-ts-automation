"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
exports.default = (0, test_1.defineConfig)({
    testDir: './tests',
    fullyParallel: true,
    retries: 2,
    workers: 3,
    reporter: [
        ['html',
            { outputFolder: './test-results/playwright-reports' },]
    ],
    use: {
        baseURL: process.env.BASE_URL || 'https://playwright.dev/docs/test-configuration',
        trace: 'on-first-retry'
    },
    projects: [
        {
            name: 'chromium',
            use: { ...test_1.devices['Desktop Chrome'] }
        },
        {
            name: 'Mobile Chrome',
            use: { ...test_1.devices['iPhone 13 Pro'] }
        }
    ]
});
//# sourceMappingURL=playwright.config.js.map