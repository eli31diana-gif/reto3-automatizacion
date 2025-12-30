import { Given, When, Then } from "@cucumber/cucumber";
import { loginAPI } from "../src/api/users.api";


let token: string;

Given("realizo login vía API con 3 usuarios", async function () {
  token = await loginAPI("kminchelle", "0lelplR");
});

Then("el token debe ser válido", async function () {
  if (!token) {
    throw new Error("Token no generado");
  }
});
