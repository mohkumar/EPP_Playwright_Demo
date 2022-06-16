const { Given } = require('@cucumber/cucumber');
const { LaunchPage } = require('../page-objects/launch-page');
const launchPage = new LaunchPage();

Given('I am on the EPP page', {timeout: 5 * 50000}, async function() {
  await launchPage.navigateToEEPScreen();
  await launchPage.verifyEEPPageIsDisplayed();
});