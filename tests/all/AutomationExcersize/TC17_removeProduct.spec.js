import { test, expect } from "./CustomFixture"



test("resgiyser before ", async ({ page }) => {


    //add products
    await page.locator("//a[text()=' Products']").click()
    await expect(page).toHaveURL(/products/)

    //hover first product
    await page.locator('.productinfo.text-center').first().hover()
    await page.locator('//a[@data-product-id="1"]').first().click()

    await page.locator('//button[text()="Continue Shopping"]').click()

    //hover second

    await page.locator('.productinfo.text-center').nth(1).hover()
    await page.locator('//a[@data-product-id="2"]').nth(1).click()
    await page.locator('//button[text()="Continue Shopping"]').click()

    //hover thr=ird

    await page.locator('.productinfo.text-center').nth(2).hover()
    await page.locator('//a[@data-product-id="3"]').nth(1).click()
    await page.locator('//a/u[text()="View Cart"]').click()


    //go to cart
    await page.locator('//a[text()=" Cart"]').click()
    await expect(page).toHaveURL(/view_cart/)

    
//remove from cart

await page.locator('#product-1 .cart_quantity_delete').click()
await expect(page.locator('#product-1')).not.toBeAttached()

    await page.waitForTimeout(1000)

})
