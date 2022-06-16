const playwright = require('playwright');
const { BeforeAll, Before, After, AfterAll , Status } = require('@cucumber/cucumber');
const cucumber = require('../cucumber');


// Launch options.
const options = {
  headless: false,
  slowMo: 100
};

BeforeAll(async () => {
  console.log('lauch browser successfully ...');
  global.browser = await playwright['chromium'].launch(options);
});

AfterAll(async () => {
  console.log('quit browser successfully ...');
  await global.browser.close();
});

// Create a fresh browser context for each test.
Before(async () => {
  console.log('Load context ...');
  global.context = await global.browser.newContext();
  global.page = await global.context.newPage();
});

// close the page and context after each test.
After(async () => {
  console.log('close context...');
  await global.page.close();
  await global.context.close();
});


After(async function (scenario) {
  if (scenario.result.status === Status.FAILED) {
    var buffer = await global.page.screenshot({ path: `reports/${scenario.pickle.name}.png`, fullPage: true })
    this.attach(buffer, 'image/png');
  }
});