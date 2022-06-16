const { When } = require('@cucumber/cucumber');
const { LaunchPage } = require('../page-objects/launch-page');
const launchPage = new LaunchPage();

When('I accept all cookies', {timeout: 2 * 5000}, async function(){
await launchPage.acceptCookies();

});

When('I click on Computer Edition', {timeout: 2 * 5000 }, async function(){
await launchPage.clickComputerEdition();
});

When ('I click on Mobile Protection', {timeout: 2 * 5000}, async function(){
await launchPage.clickMobileProtection();
});

When('I click on Find Out More', {timeout: 2 * 5000}, async function(){
 await launchPage.clickFindOutMore();
});

When('I click on Product Support', {timeout: 2 * 5000}, async function(){
await launchPage.clickProductSupport();
});