import { test, expect } from "@playwright/test";

test("theme toggle button is visible", async ({ page }) => {
  await page.goto("/");
  const themeToggle = page.getByRole("button", {
    name: /Switch to (dark|light) mode/i,
  });
  await expect(themeToggle).toBeVisible();
});

test("theme toggle switches between light and dark", async ({ page }) => {
  await page.goto("/");
  const themeToggle = page.getByRole("button", {
    name: /Switch to (dark|light) mode/i,
  });

  // Check initial theme is light
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await expect(themeToggle).toHaveAttribute(
    "aria-label",
    "Switch to dark mode",
  );

  // Toggle to dark
  await themeToggle.click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await expect(themeToggle).toHaveAttribute(
    "aria-label",
    "Switch to light mode",
  );

  // Toggle back to light
  await themeToggle.click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await expect(themeToggle).toHaveAttribute(
    "aria-label",
    "Switch to dark mode",
  );
});

test("theme persists in localStorage", async ({ page }) => {
  await page.goto("/");
  const themeToggle = page.getByRole("button", {
    name: /Switch to (dark|light) mode/i,
  });

  // Toggle to dark
  await themeToggle.click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");

  // Check localStorage
  const theme = await page.evaluate(() => localStorage.getItem("theme"));
  expect(theme).toBe("dark");

  // Toggle to light
  await themeToggle.click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");

  // Check localStorage
  const themeAfterToggle = await page.evaluate(() =>
    localStorage.getItem("theme"),
  );
  expect(themeAfterToggle).toBe("light");
});

test("theme persists after page reload", async ({ page }) => {
  await page.goto("/");
  const themeToggle = page.getByRole("button", {
    name: /Switch to (dark|light) mode/i,
  });

  // Toggle to dark
  await themeToggle.click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");

  // Reload page
  await page.reload();

  // Verify theme is still dark
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await expect(
    page.getByRole("button", {
      name: /Switch to light mode/i,
    }),
  ).toBeVisible();
});
