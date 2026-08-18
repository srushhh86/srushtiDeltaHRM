import { test, expect } from "./CustomFixture"

test("all search before ", async ({ page }) => {

 await page.getByText('Subscription').scrollIntoViewIfNeeded()

 await expect(page.getByText('Subscription')).toBeVisible()


 await page.locator('#scrollUp').click()

 await expect(page.getByText('Full-Fledged practice website for Automation Engineers').first()).toBeVisible()

 await page.waitForTimeout(2000)


})
