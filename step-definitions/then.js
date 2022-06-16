const { Then } = require('@cucumber/cucumber');
const { LaunchPage } = require('../page-objects/launch-page');
const launchPage = new LaunchPage();


Then('I verify EPP label on the page', {timeout: 2 * 5000}, async function(){
await launchPage.verifyEEPPageIsDisplayed();
});