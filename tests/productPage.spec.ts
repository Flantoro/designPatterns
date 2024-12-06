import test from "../common/baseTest.ts";
import expect  from "../common/baseTest.ts";
import { ProductData } from "../data/ProductData.ts";
import { ProductInfoDto } from "../dto/ProductInfoDto.ts";

const targetProduct: ProductInfoDto = new ProductData().getTargetProduct();

test.beforeEach(async ({ page, loginPage }) => {
  page.goto("");
  await loginPage.loginAsStandartUser();
});

test.describe("Product Page", async () => {
  test("Check Product Title", async ({page, productPage, mainPage}) => {
    await test.step(`CLick Product Title`, async () => {
      await mainPage.productItem.clickProductTitle(targetProduct);
	});
  await test.step(`Assertions`, async () => {
    await productPage.verifyProductNameVisibilityOnProductPage(targetProduct);
  });
  })
});
