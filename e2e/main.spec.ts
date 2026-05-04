// CH-48: E2E Tests — main user flows
import { test, expect } from "@playwright/test"

test("home page loads with challenge links", async ({ page }) => {
  await page.goto("/")
  await expect(page.locator("h1")).toContainText("Next.js 50 Code Challenges")
  await expect(page.locator("a").first()).toBeVisible()
})

test("products page shows product cards", async ({ page }) => {
  await page.goto("/products")
  await expect(page.locator("h1")).toContainText("Products")
})

test("product detail page loads from slug", async ({ page }) => {
  await page.goto("/products/phone")
  await expect(page.locator("h1")).toContainText("Smartphone")
})

test("invalid product slug shows 404", async ({ page }) => {
  await page.goto("/products/does-not-exist")
  await expect(page.locator("body")).toContainText("404")
})

test("blog page shows posts", async ({ page }) => {
  await page.goto("/blog")
  await expect(page.locator("h1")).toContainText("Blog")
})

test("counter increments", async ({ page }) => {
  await page.goto("/counter")
  await expect(page.locator("text=0")).toBeVisible()
  await page.click("button:has-text('+')")
  await expect(page.locator("text=1")).toBeVisible()
})

test("unauthenticated user redirected from dashboard", async ({ page }) => {
  await page.goto("/dashboard")
  await expect(page).toHaveURL(/login/)
})
