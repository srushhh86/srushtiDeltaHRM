import { test, expect } from "./CustomFixture"


test("test case", async ({ page }) => {

    await page.locator("//a[text()=' Products']").click()
await expect(page).toHaveURL(/products/)

//hover first product
await page.locator('.productinfo.text-center').first().hover()
await page.locator('//a[@data-product-id="1"]').first().click()

await page.locator('//button[text()="Continue Shopping"]').click()

//hover second

await page.locator('.productinfo.text-center').nth(1).hover()
await page.locator('//a[@data-product-id="2"]').nth(1).click()
await page.locator('//a/u[text()="View Cart"]').click()

let listOfproducts=await page.locator('tbody tr')
console.log(await listOfproducts.count());

await expect(await listOfproducts.count()).toBe(2)

let price1=await page.locator('.cart_price p').first()
console.log(price1);

await expect(price1).toBeVisible()

let price2=await page.locator('.cart_price p').nth(1)
console.log(price2);
await expect(price2).toBeVisible()

let quantity1=await page.locator('.cart_quantity button').nth(0)
console.log(quantity1);
await expect(quantity1).toBeVisible()


let quantity2=await page.locator('.cart_quantity button').nth(1)
console.log(quantity2);
await expect(quantity2).toBeVisible()

let totalprice1=await page.locator('.cart_total_price').nth(0)
console.log(totalprice1);
await expect(totalprice1).toBeVisible()


let totalprice2=await page.locator('.cart_total_price').nth(1)
console.log(totalprice2);
await expect(totalprice2).toBeVisible()



    await page.waitForTimeout(1000)

})
