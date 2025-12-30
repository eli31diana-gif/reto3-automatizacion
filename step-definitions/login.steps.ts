import { Given, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { login } from "../src/task/Login.task";
import { Actor } from "../src/actors/Actor";

let actor: Actor;

Given("el usuario intenta iniciar sesión con usuario bloqueado", async function () {
  actor = new Actor("Usuario Bloqueado", this.page as any);
  await actor.attemptsTo(
    login(process.env.LOCKED_USER!, process.env.PASSWORD!)
  );
});

Then("debe ver un mensaje de error", async function () {
  const error = await this.page.locator('[data-test="error"]').textContent();
  expect(error).toContain("locked");
});
