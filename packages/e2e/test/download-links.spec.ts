import { test, expect } from "@playwright/test";

test("download links are visible", async ({ page }) => {
  await page.goto("/");
  const windowsLink = page.getByRole("link", { name: /Windows/i });
  const macosLink = page.getByRole("link", { name: /macOS/i });
  const linuxLink = page.getByRole("link", { name: /Linux/i });
  await expect(windowsLink).toBeVisible();
  await expect(macosLink).toBeVisible();
  await expect(linuxLink).toBeVisible();
});
