import { type Locator, type Page } from "@playwright/test";
import { Header } from "../components/Header";

export class MainPage {
  readonly page: Page;
  public header: Header;

  constructor(page: Page) {
    this.page = page;
    this.header = new Header(page);
  }
}