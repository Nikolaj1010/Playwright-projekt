import {Locator, Page} from "@playwright/test";

export class KbTestingPageObject {
    readonly page: Page;
    readonly cookieBar: Locator;
    readonly podnikateleAFirmy: Locator;
    readonly produktyMenu: Locator;
    readonly produktyMenuArrow: Locator;
    readonly megaMenu: Locator;
    readonly profiUcet: Locator;
    readonly mamZajemButton: Locator;
    readonly naPobocce: Locator;
    readonly modalWindow: Locator;
    readonly jmenoAPrijmeniInput: Locator;
    readonly mobilInput: Locator;
    readonly emailInput: Locator;
    readonly pokracovatButton: Locator;
    readonly hledatPoblizInput: Locator;
    readonly kladno1DropdownOption: Locator;
    readonly tabSeznam: Locator;
    readonly tabMapa: Locator;
    readonly nacistDalsi: Locator;
    readonly kbBranchOfficeButton: Locator;

    constructor (page:Page) {
        this.page = page;
        this.cookieBar = page.locator('div.cookie-bar');
        this.podnikateleAFirmy = page.getByTestId('segment-desktop-5b13e6f2-bc20-41fa-a6d5-a36a68422762');
        this.produktyMenu = page.getByText('Produkty');
        this.produktyMenuArrow = this.produktyMenu.locator('svg.icon');
        this.megaMenu = page.getByTestId('a349835f-5ef5-4e7b-97d1-e44bb46d931b');
        this.profiUcet = page.getByRole('link', {name: 'Profi účet', exact: true});
        this.mamZajemButton = page.getByRole('link', {name: 'Mám zájem'});
        this.naPobocce = page.getByTestId('cta-0cdeae99-121e-4271-8aeb-0bf09f16ff54');
        this.modalWindow = page.locator('kbo-modal');
        this.jmenoAPrijmeniInput = this.modalWindow.locator('[formcontrolname="fullname"]');
        this.mobilInput = this.modalWindow.locator('#phoneNumber');
        this.emailInput = this.modalWindow.locator('[formcontrolname="email"]');
        this.pokracovatButton = this.modalWindow.getByRole('button', {name: 'Pokračovat'});
        this.hledatPoblizInput = this.modalWindow.locator('[formcontrolname="locationSearch"]');
        this.kladno1DropdownOption = this.modalWindow.locator('typeahead-container.dropdown').locator('button').nth(1);
        this.tabSeznam = this.modalWindow.getByTestId('tab-list');
        this.tabMapa = this.modalWindow.getByTestId('tab-map');
        this.nacistDalsi = this.modalWindow.locator('div.showMore');
        this.kbBranchOfficeButton = this.modalWindow.locator('button.branchOption');
    }

    async acceptCookieBar() {
        if (await this.cookieBar.isVisible()) {
            await this.cookieBar.getByRole('button', {name: 'Přijmout vše'}).click();
        }
    }

    async doesCMSCookieLevelValueExist():Promise<boolean> {
        let doesCookieNameExist: boolean = false;
        const cookieObject = await this.page.context().cookies();
        
        for (let i = 0; i < cookieObject.length; i++) {
            if (cookieObject[i].name === 'CMSCookieLevelValue' && cookieObject[i].value === 'preferential%7Canalytical%7Cmarketing') {
                doesCookieNameExist = true;
                break;
            }
        }

        return doesCookieNameExist;
    }
}
