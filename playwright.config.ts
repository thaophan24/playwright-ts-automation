import {defineConfig, devices} from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    fullyParallel: true,
    retries: 2,
    workers: 3,
    reporter: [
        ['html',
            { outputFolder: './test-results/playwright-reports' }, ]
    ],
    use: {
        baseURL: process.env.BASE_URL || 'https://playwright.dev/docs/test-configuration',
        trace: 'on-first-retry'
    },
    projects: [
        {
            name: 'chromium',
            use: {...devices['Desktop Chrome']}
        },
        {
            name: 'Mobile Chrome',
            use: {...devices['iPhone 13 Pro']}
        }
    ]
});