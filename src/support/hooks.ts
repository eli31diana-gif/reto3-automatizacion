import 'dotenv/config';
import { Before, After } from "@cucumber/cucumber";
import { chromium, Page, Browser } from "@playwright/test";

let browser: Browser;
let page: Page;

Before(async function () {
  browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  page = await context.newPage();
  this.page = page;
});

After(async function () {
  await browser.close();
});
