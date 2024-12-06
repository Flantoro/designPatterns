import { test as baseTest } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { MainPage } from "../pages/MainPage";
import { ProductPage } from "../pages/ProductPage";

const test = baseTest.extend<{
	loginPage: LoginPage;
	mainPage: MainPage;
	productPage: ProductPage;
}>({
	loginPage: async ({ page }, use) => {
		await use(new LoginPage(page));
	},
	mainPage: async ({ page }, use) => {
		await use(new MainPage(page));
	},
	productPage: async ({ page }, use) => {
		await use(new ProductPage(page));
	},
});

export default test;
