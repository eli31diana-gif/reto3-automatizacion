const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'cucumber-report.json',
  output: 'cucumber-report.html',
  reportSuiteAsScenarios: true,
  launchReport: false,
};

reporter.generate(options);

