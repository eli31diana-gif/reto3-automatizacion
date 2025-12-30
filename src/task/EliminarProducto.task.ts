import type { Page } from "@playwright/test";

export const removeProduct = async (page: Page) => {
  await page.click('.shopping_cart_link');  
  await page.click('[data-test="remove-sauce-labs-backpack"]'); 
};

