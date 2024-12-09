import { type Locator, type Page, expect } from "@playwright/test";
import { Header } from "../components/Header";
import { Loadable } from "../common/Loadable";

export class LoginPage implements Loadable {
  readonly page: Page;
  readonly usernameInputField: Locator;
  readonly passwordInputField: Locator;
  readonly loginButton: Locator;
  public header: Header;

  constructor(page: Page) {
    this.page = page;
    this.header = new Header(page);
    this.usernameInputField = page.locator("[data-test='username']");
    this.passwordInputField = page.locator("[data-test='password']");
    this.loginButton = page.locator("[id='login-button']");
  }

  async loginAsStandartUser() {
    await this.usernameInputField.fill("standard_user");
    await this.passwordInputField.fill("secret_sauce");
    await this.loginButton.click();
    return this;
  }

  async loginAsLockedUser() {
    await this.usernameInputField.fill("locked_out_user");
    await this.passwordInputField.fill("secret_sauce");
    await this.loginButton.click();
    return this;
  }

  async isLoaded() {
    await expect(this.loginButton).toBeVisible();
  }
}