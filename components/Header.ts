import { expect, type Locator, type Page } from "@playwright/test";

export class Header{
    readonly page: Page;
    readonly shoppingCartButton: Locator;
    readonly appLogoContainer: Locator;
    readonly burgerButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.shoppingCartButton = this.page.locator('[id="shopping_cart_container"]');
        this.appLogoContainer = this.page.locator('[class="app_logo"]');
        this.burgerButton = this.page.locator('[class="bm-burger-button"] button');
    }

    async verifyAppLogoVisibility(){
        await expect(this.appLogoContainer).toBeVisible();
    }

    async verifyShoppingCartVisibility(){
        await expect(this.shoppingCartButton).toBeVisible();
    }

    async clickShoppingCart(){
        await expect(this.shoppingCartButton).toBeVisible();
        await this.shoppingCartButton.click();
    }
}