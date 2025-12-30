import { Page, expect } from "@playwright/test";

export const orderConfirmation = async (page: Page) => {
  const message = await page.textContent('.complete-header');
  expect(message).toContain('Thank you for your order');
};
