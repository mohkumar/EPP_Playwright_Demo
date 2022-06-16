locators = {
   "acceptCookies": "button#onetrust-accept-btn-handler",
   "computerEdition" : "[class='wsbg-spot container-2184779091 '] [tabindex='-1']:nth-child(3) .cmp-tabs__tab__label",
   "mobileProtection" : "a:nth-of-type(3) > .cmp-tabs__tab__label",
   "findOutMore" : ".container-408174487.wsbg-spot a[role='button']",
   "productSupport" : ".width-full.wsbg-spot  p"
 }
 
 class LaunchPage {

  async navigateToEEPScreen() {
   return await page.goto(global.BASE_URL);
  }

  async acceptCookies() {
   const element = await page.waitForSelector(locators.acceptCookies);
   await page.click(locators.acceptCookies);
  }

  async verifyEEPPageIsDisplayed() {
    return expect(await page.title()).to.equal('WithSecure™ Elements Endpoint Protection | WithSecure™');
   }

  async clickComputerEdition() {
    const element = await page.waitForSelector(locators.computerEdition);
    await page.click(locators.computerEdition);
  }

  async clickMobileProtection(){
    const element = await page.waitForSelector(locators.mobileProtection);
    await page.click(locators.mobileProtection);
  }

  async clickFindOutMore(){
    const element = await page.waitForSelector(locators.findOutMore);
    await page.click(locators.findOutMore);

  }
  async clickProductSupport(){
    const element = await page.waitForSelector(locators.productSupport);
    await page.click(locators.productSupport);
  }
}
module.exports = { LaunchPage };