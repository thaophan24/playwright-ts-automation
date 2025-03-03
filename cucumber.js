module.exports = {
    default: {
        requireModule: ["ts-node/register"],
        require: ["./tests/step-definitions/**/*.ts"],
        format: ["progress-bar", "json:reports/cucumber-report.json"],
        path: ["./tests/features/**/*.feature"],
    }
};
