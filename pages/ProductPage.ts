import { expect, Locator, Page } from "@playwright/test";
import { ProductInfoDto } from "../dto/ProductInfoDto";

export class ProductPage{
    readonly page: Page;
    private productName: Locator;

    constructor(page: Page){
        this.page = page;
    }

    async verifyProductNameVisibilityOnProductPage(productInfo: ProductInfoDto){
        this.productName = this.page.getByText(`${productInfo.getName()}`);
        await expect(this.productName).toBeVisible();
        return this;
    }
}