import {test, expect} from '@playwright/test';
import { PlaywrightPageObject } from './playwright.po';

test.describe('Test example to show my skill with Playwright', () => {
    // Example of code before the test block
    test.beforeEach(async ({ page }) => {
        const playwrightPO = new PlaywrightPageObject(page);

        // Get to playwright url
        await page.goto('https://playwright.dev/');

        // Check that image with alt text is visible before performing the test block
        await expect(playwrightPO.imageBrowsers).toBeVisible();    
    });
    test('Should check that installation menu option is active after clicking on "Get started" button', async ({ page }) => {
        const playwrightPO = new PlaywrightPageObject(page);

        // Check that installation option does not exist yet
        await expect(playwrightPO.installationMenuOption).not.toBeAttached();
        
        // Clik on button "Get started"
        await playwrightPO.getStartedButton.click();

        // Check that installation option is visible
        await expect(playwrightPO.installationMenuOption).toBeVisible();

        // Check that installation option is active (it has green color)
        await expect(playwrightPO.installationMenuOption).toHaveCSS('color', 'rgb(26, 126, 31)');

        // How we can see what is happening during the test using an option from playwright config (launch options)
        // How we can see a problem with a special interface
        
        // Check the screenshot for comparision

        // Check that changing the page view will cause the error for screenshot comparision

        // Create a json report

        // Showing CI process
    });
    

});