import { type Locator, type Page } from "@playwright/test";
import { Header } from "../components/Header";
import { ProductItem } from "../components/ProductItem";

export class MainPage {
  readonly page: Page;
  public header: Header;
  public productItem: ProductItem;

  constructor(page: Page) {
    this.page = page;
    this.header = new Header(page);
    this.productItem = new ProductItem(page);
  }
}