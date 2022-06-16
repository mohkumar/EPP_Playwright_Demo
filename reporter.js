let reporter = require('cucumber-html-reporter');

let options = {
        theme: 'hierarchy',
        jsonFile: 'reports/cucumber_report.json',
        output: 'reports/cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        brandTitle: 'Playwright - Test Automation Report',
        metadata: {
            "App Version":"1.0.0",
            "Test Environment": "QA",
            "Browser": "Chrome  102.0.5005.115",
            "Platform": "MacOs",
            "Parallel": "Scenarios",
            "Executed": "local"
        }
    };

    reporter.generate(options);