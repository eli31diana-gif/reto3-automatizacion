import { request, expect } from "@playwright/test";

export async function loginAPI(username: string, password: string) {
  const context = await request.newContext();
  const response = await context.post(
    'https://dummyjson.com/auth/login',
    { data: { username, password } }
  );

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body).toHaveProperty('token');

  return body.token;
}
