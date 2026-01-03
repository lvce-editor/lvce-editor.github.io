import { test, expect } from "@playwright/test";

test("download page has correct title", async ({ page }) => {
  await page.goto("/download");
  await expect(page).toHaveTitle(
    /Download Lvce Editor - Free Code Editor for Windows, macOS, and Linux/i,
  );
  const title = page.locator("h2.download-hero-title");
  await expect(title).toBeVisible();
  await expect(title).toHaveText("Download Lvce Editor");
});

test("download page has description", async ({ page }) => {
  await page.goto("/download");
  const description = page.locator("p.download-hero-description");
  await expect(description).toBeVisible();
  await expect(description).toContainText(
    "Get the latest version of Lvce Editor for your platform",
  );
});

test("download buttons are visible", async ({ page }) => {
  await page.goto("/download");
  const windowsButton = page.getByRole("link", { name: /Windows/i });
  const macosButton = page.getByRole("link", { name: /macOS/i });
  const linuxButton = page.getByRole("link", { name: /Linux/i });
  await expect(windowsButton).toBeVisible();
  await expect(macosButton).toBeVisible();
  await expect(linuxButton).toBeVisible();
});
