import { test, expect } from "./CustomFixture"


test("test case", async ({ page }) => {

    await page.locator('//a[@href="/product_details/1"]').click()
await expect(page).toHaveURL(/product_details/)

//increase quanitu
let qauntity="4"
await page.locator('#quantity').fill(qauntity)
await page.locator('//button[@type="button"]').click()

await page.locator('//u[text()="View Cart"]').click()

//view cart
await expect(page).toHaveURL(/view_cart/)
await expect(page.locator('.cart_quantity button')).toHaveText(qauntity)



    await page.waitForTimeout(1000)

})
