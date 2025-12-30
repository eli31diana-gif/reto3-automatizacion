import { Page } from "@playwright/test";
import { LoginPage } from "../ui/LoginPage";

export const login = (user: string, password: string) => {
  return async (page: Page) => {
    await page.goto(process.env.BASE_URL!);
    await page.fill(LoginPage.username, user);
    await page.fill(LoginPage.password, password);
    await page.click(LoginPage.loginButton);
  };
};
