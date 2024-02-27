import {test, expect} from '@playwright/test';
import {PlaywrightPageObject} from './playwright.po';

test.describe('Test example to show my skill with Playwright', () => {
    // Example of code before the test block
    test.beforeEach(async ({ page }) => {
        await page.goto('https://playwright.dev/');
    });
        // Get to playwright url
        
    test('Should check that installation menu option is active after clicking on "Get started" button', async ({ page }) => {
        // Create a new instance of page object
        const playWrightPO = new PlaywrightPageObject(page);

        // Check that installation option does not exist yet
        await expect(playWrightPO.installationMenuOption).not.toBeAttached();
        
        // Clik on button "Get started"
        await playWrightPO.getStartedButton.click();

        // Check that installation option is visible
        await expect(playWrightPO.installationMenuOption).toBeVisible();

        // Check that installation option is active (it has green color)
        await expect(playWrightPO.installationMenuOption).toHaveCSS('color', 'rgb(26, 126, 31)');

        // How we can see what is happening during the test using an option from playwright config (launch options)
        // How we can see a problem with a special interface
        await playWrightPO.generatingTestsMenuOption.click();
        // Check the screenshot for comparision
        await expect(page).toHaveScreenshot('screenshot.png');

        // Check that changing the page view will cause the error for screenshot comparision

        // Create a json report

        // Showing CI process
    });
    

});