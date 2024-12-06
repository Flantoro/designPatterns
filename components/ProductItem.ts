import { expect, type Locator, type Page } from "@playwright/test";
import { ProductInfoDto } from "../dto/ProductInfoDto";
import { ProductData } from "../data/ProductData";

export class ProductItem{
    readonly page: Page;
     private addToCartButton: Locator;
     private productTitle: Locator;

     constructor(page: Page){
        this.page = page;
     }


     async clickAddtoCartButton(productInfo: ProductInfoDto){
        this.addToCartButton = this.page.locator(``);
     }

     async clickProductTitle(productInfo: ProductInfoDto){
        this.productTitle = this.page.locator(`[id="item_${productInfo.getId()}_title_link"]`);
        await this.productTitle.click();
     }
}