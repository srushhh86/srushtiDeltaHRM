import { test, expect } from "./CustomFixture"
import data from "./testData1.json"



test("all search before ", async ({ page }) => {

    await page.getByText('recommended items').scrollIntoViewIfNeeded()

    await expect( page.getByText('recommended items')).toBeVisible()
    await page.locator('//img[@src="/get_product_picture/4"]/../descendant::a').click()
    await page.locator('//a/u[text()="View Cart"]').click()
    await expect(page.locator('//a[@href="/product_details/4"]')).toHaveText("Stylish Dress")



    
await page.waitForTimeout(1000)





})
