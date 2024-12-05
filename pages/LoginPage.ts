import { type Locator, type Page } from "@playwright/test";
import { Header } from "../components/Header";

export class LoginPage {
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
  }

  async loginAsLockedUser() {
    await this.usernameInputField.fill("locked_out_user");
    await this.passwordInputField.fill("secret_sauce");
    await this.loginButton.click();
  }
}