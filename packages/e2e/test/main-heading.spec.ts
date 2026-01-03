import { test, expect } from "@playwright/test";

test("main heading is visible", async ({ page }) => {
  await page.goto("/");
  const heading = page.getByRole("heading", {
    name: /A Modern Code Editor/i,
  });
  await expect(heading).toBeVisible();
});

