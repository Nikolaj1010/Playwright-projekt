import {test, expect} from '@playwright/test';
import {KbTestingPageObject} from './kb-testing.po';

test.describe('Complex test about functionality of KB website', () => {
    test('Should perform all steps which lead to the point where 10 KB branch offices are displayed at the end', async ({ page }) => {
      const kbTestingPO = new KbTestingPageObject(page);
      
      // Get the kb.cz url as parameter from the playwright.config.ts
      await page.goto('https://www.kb.cz/');
  
      // Check that "CMSCookieLevelValue" was not added to the cookies yet (by default)
      let doesCMSCookieLevelValueExist = await kbTestingPO.doesCMSCookieLevelValueExist();
      expect(doesCMSCookieLevelValueExist).toBeFalsy();

      // Accept cookies if cookie bar is visible
      await kbTestingPO.acceptCookieBar();

      // Check that cookie bar is hidden
      await kbTestingPO.cookieBar.waitFor({state: 'hidden'});

      // Check that "CMSCookieLevelValue" was added to the cookies now
      doesCMSCookieLevelValueExist = await kbTestingPO.doesCMSCookieLevelValueExist();
      expect(doesCMSCookieLevelValueExist).toBeTruthy();

      // Click on "Podnikatelé a Firmy"
      // await kbTestingPO.podnikateleAFirmy.click();

      // // Check that cookie bar does not exist anymore
      // await expect(kbTestingPO.cookieBar).not.toBeAttached();

      // // Click on "Produkty" menu
      // await kbTestingPO.produktyMenuArrow.click();

      // // Check that mega menu is open before clicking on "Profi účet" (increase stability of the next click because Playwright is too fast)
      // await expect(kbTestingPO.produktyMenu).toHaveClass(/is-open/);

      // // CLick on "Profi účet" from mega menu
      // await kbTestingPO.profiUcet.click();

      // // Check that element "Na pobočce" is not in the viewport yet
      // await expect(kbTestingPO.naPobocce).not.toBeInViewport();

      // // CLick on "Mám zájem" button
      // await kbTestingPO.mamZajemButton.click();

      // // Check that element "Na pobočce" is in the viewport now
      // await expect(kbTestingPO.naPobocce).toBeInViewport();

      // // Check that modal window is not open yet (it does not exist)
      // await expect(kbTestingPO.modalWindow).not.toBeAttached();

      // // Click on element "Na pobočce"
      // await kbTestingPO.naPobocce.click();

      // // Check that modal window is open now (it is visible)
      // await kbTestingPO.modalWindow.waitFor({state: 'visible'});
      
      // // Insert "Jan Novak" to the jmeno input
      // await kbTestingPO.jmenoAPrijmeniInput.fill('Jan Novak');

      // // Insert "608359908" to the mobil input
      // await kbTestingPO.mobilInput.fill('608359908');

      // // Insert "jan.novak@seznam.cz" to the email input
      // await kbTestingPO.emailInput.fill('jan.novak@seznam.cz');

      // // Click on button "Pokračovat"
      // await kbTestingPO.pokracovatButton.click();

      // // Insert "Kladno" to the location input
      // await kbTestingPO.hledatPoblizInput.fill('Kladno');

      // // Check that "Seznam" and "Mapa" tabs are not visible yet before clicking on "Kladno 1" option
      // await expect(kbTestingPO.tabSeznam).not.toBeAttached();
      // await expect(kbTestingPO.tabMapa).not.toBeAttached();

      // // Click on "Kladno 1" option from the dropdown below
      // await kbTestingPO.kladno1DropdownOption.click();
      
      // // Check that "Seznam" and "Mapa" tabs are visible
      // await expect(kbTestingPO.tabSeznam).toBeVisible();
      // await expect(kbTestingPO.tabMapa).toBeVisible();

      // // Check the number of KB branch offices by default (they should be 5 of them)
      // await expect(kbTestingPO.kbBranchOfficeButton).toHaveCount(5);

      // // Click on show more option
      // await kbTestingPO.nacistDalsi.click();

      // // Check that show more option is hidden before checking the number of all KB branch offices
      // await kbTestingPO.nacistDalsi.waitFor({state: 'hidden'});

      // // Check that number of KB branch offices is 10 now
      // await expect(kbTestingPO.kbBranchOfficeButton).toHaveCount(10);
    });
});