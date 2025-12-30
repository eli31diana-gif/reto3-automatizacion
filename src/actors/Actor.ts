import { Page } from "@playwright/test";

export class Actor {
  constructor(public name: string, public page: Page) {}

  async attemptsTo(task: (page: Page) => Promise<void>) {
    await task(this.page);
  }
}
