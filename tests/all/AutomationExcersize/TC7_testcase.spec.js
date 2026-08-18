import { test, expect } from "./CustomFixture"
//import { expect } from "@playwright/test"


test("test case", async ({ page }) => {

    
await page.locator("//a[text()=' Test Cases']").click()
await expect(page).toHaveURL(/test_cases/)

    await page.waitForTimeout(1000)

})
