import { test, expect } from "./CustomFixture"


test("resgiyser before ", async ({ page }) => {

await page.locator("//a[text()=' Products']").click()

await expect(page.locator('//h2[text()="Brands"]')).toBeVisible()

await page.locator('//a[@href="/brand_products/Polo"]').click()

await expect(page.locator('//h2[@class="title text-center"]')).toContainText("Polo")


await page.locator('//a[@href="/brand_products/Mast & Harbour"]').click()

await expect(page.locator('//h2[@class="title text-center"]')).toContainText("Mast & Harbour")

})
