import { Actor } from "../src/actors/Actor";
import { login } from "../src/task/Login.task";
import { agregarProducto } from "../src/task/AgregarProductos.task";
import { checkout } from "../src/task/Checkout.task";
import { orderConfirmation } from "../src/questions/OrderConfirmation.question";
import { Given, When, Then } from "@cucumber/cucumber";
import { removeProduct } from "../src/task/EliminarProducto.task";

let actor: Actor;

Given("el usuario inicia sesión con credenciales válidas", async function () {
  actor = new Actor("Usuario", this.page);
  await actor.attemptsTo(
    login(process.env.STANDARD_USER!, process.env.PASSWORD!)
  );
});

When("agrega un producto al carrito y completa la compra", async function () {
  await actor.attemptsTo(agregarProducto());
  await actor.attemptsTo(checkout());
});

Then("la orden debe confirmarse correctamente", async function () {
  await orderConfirmation(this.page);
});

When("agrega un producto al carrito", async function () {
  await actor.attemptsTo(agregarProducto());
});

When("elimina el producto del carrito", async function () {
  await removeProduct(this.page);
});

Then("el carrito debe estar vacío", async function () {
  const page = this.page as any;
  const cartCount = await page.locator('.shopping_cart_badge').count();
  if (cartCount > 0) {
    throw new Error("El carrito no está vacío");
  }
});
