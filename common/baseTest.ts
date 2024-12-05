import { test as baseTest } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { MainPage } from "../pages/MainPage";

const test = baseTest.extend<{
	loginPage: LoginPage;
	mainPage: MainPage;
}>({
	loginPage: async ({ page }, use) => {
		await use(new LoginPage(page));
	},
	mainPage: async ({ page }, use) => {
		await use(new MainPage(page));
	},
});

export default test;
