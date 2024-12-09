import test from "../common/baseTest.ts";

test.beforeEach(async ({ page }) => {
  page.goto("");
});

test.describe("Login", async () => {
  test("Login as valid user", async ({page, loginPage, mainPage}) => {
    await test.step(`Login with standart user credentials`, async () => {
      await loginPage.isLoaded();
      await loginPage.loginAsStandartUser();
		});
    await test.step(`Assertions`, async () => {
      await mainPage.header.verifyAppLogoVisibility();
      await mainPage.header.verifyShoppingCartVisibility();
		});
  })
});
