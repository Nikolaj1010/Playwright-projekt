import {Locator, Page} from "@playwright/test";

export enum RadioButtonsLabel {
    Graduate = 'Graduate',
    PostGraduate = 'Post Graduate',
    Other = 'Other'
}

export interface User {
    name: string,
    email: string,
    website: string,
    checkboxIndex: number
}

export class SampleTestPageObject {
    readonly page: Page;
    readonly cookieBar: Locator;
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly websiteInput: Locator;
    readonly checkboxesWrapper: Locator;
    readonly commentTextArea: Locator;


    constructor(page: Page) {
        this.page = page;
        this.cookieBar = page.locator('div.fc-dialog-container');
        this.nameInput = page.locator('#g2599-name');
        this.emailInput = page.locator('#g2599-email');
        this.websiteInput = page.locator('#g2599-website');
        this.checkboxesWrapper = page.locator('div.grunion-field-checkbox-multiple-wrap');
        this.commentTextArea = page.locator('#contact-form-comment-g2599-comment');
    }

    samplePageUrl = 'https://www.globalsqa.com/samplepagetest/';

    testData = {
        arrayOfStrings: ['Read Single Object', 'Video Tutorial', 'Read Array of Objects with Key', 'Easy Tutorial', 'Other']
    };

    public async acceptCookieBar() {
        if (await this.cookieBar.isVisible()) {
            await this.cookieBar.getByLabel('Consent', {exact: true}).click();
        }
    }

    public async insertUserJsonDataIntoInputs(json: any) {
        const user: User = JSON.parse(JSON.stringify(json)) as User;

        // fill inputs with json input data
        await this.nameInput.fill(user.name);
        await this.emailInput.fill(user.email);
        await this.websiteInput.fill(user.website);

        // check correct checkbox according to the index from json
        await this.checkboxesWrapper.locator('input[type="checkbox"]').nth(user.checkboxIndex).check();
    }

    public async checkRadioButtonByName(radioButtonName: RadioButtonsLabel) {
        await this.page.getByLabel(radioButtonName, {exact: true}).check();
    }

    public async areAllInputsFilledWithCorrectJsonData(json: any):Promise<boolean> {
        const user: User = JSON.parse(JSON.stringify(json)) as User;
        const isNameInputFilled = await this.nameInput.inputValue() === user.name ? true : false;
        const isEmailInputFilled = await this.emailInput.inputValue() === user.email ? true : false;
        const isWebsiteInputFilled = await this.websiteInput.inputValue() === user.name ? true : false;
        const isCorrectCheckboxChecked = await this.checkboxesWrapper.locator('input[type="checkbox"]').nth(user.checkboxIndex).isChecked() ? true : false;

        return isNameInputFilled && isEmailInputFilled && isWebsiteInputFilled && isCorrectCheckboxChecked;
    }

    public getLongestStringFromArray(stringArray: string[]): string {
        let comparedValue: number = 0;
        let longestString: string = '';

        for (let j = 0; j < stringArray.length; j++) {
            if (stringArray[j].length > comparedValue) {
                comparedValue = stringArray[j].length;
                longestString = stringArray[j];
            }
        }

        return longestString;
    }
}