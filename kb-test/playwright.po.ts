import {Locator, Page} from "@playwright/test";

export class PlaywrightPageObject {
    readonly page: Page;
    readonly getStartedButton: Locator;
    readonly imageBrowsers: Locator;
    readonly installationMenuOption: Locator;
    readonly generatingTestsMenuOption: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getStartedButton = page.getByRole("link", {name: "Get started"});
        this.imageBrowsers = page.getByAltText("Browsers (Chromium, Firefox, WebKit)");
        this.installationMenuOption = page.getByRole("link", {name: "Installation"});
        this.generatingTestsMenuOption = page.getByRole("link", {name: "Generating tests"});
    }
}
