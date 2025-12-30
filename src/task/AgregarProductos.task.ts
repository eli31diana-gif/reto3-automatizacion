import { Page } from "@playwright/test";

export const agregarProducto = () => {
  return async (page: Page) => {
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('.shopping_cart_link');
  };
};
