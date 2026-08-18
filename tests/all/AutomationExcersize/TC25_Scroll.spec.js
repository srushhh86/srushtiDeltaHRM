import { test, expect } from "./CustomFixture"

test("all search before ", async ({ page }) => {

 await page.mouse.wheel(0, 3000)
  await page.waitForTimeout(2000)

 await page.locator('#scrollUp').click()

 await expect(page.getByText('Full-Fledged practice website for Automation Engineers').first()).toBeVisible()

 await page.waitForTimeout(2000)


})
