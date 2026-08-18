import { test, expect } from "./CustomFixture"


test("test case", async ({ page }) => {

await page.locator("//a[text()=' Products']").click()
await expect(page).toHaveURL(/products/)


await page.locator('//a[@href="/product_details/1"]').click()
await expect(page).toHaveURL(/product_details/)


//verify

await page.waitForLoadState()
let productname=page.locator('.product-information h2')
console.log(await productname.textContent());

await expect(productname).toBeVisible()


let category=await page.locator('.product-information p').filter({hasText:"Category"})
console.log(await category.textContent());
await expect(category).toBeVisible()

let price =await page.locator('.product-information span span')
console.log(await price.textContent())
await expect(price).toBeVisible()


let availabitiy =await page.locator('.product-information p').filter({hasText:"Availability:"})
console.log(await availabitiy.textContent())
await expect(availabitiy).toBeVisible()

let condition =await page.locator('.product-information p').filter({hasText:"Condition:"})
console.log(await condition.textContent())
await expect(condition).toBeVisible()


let brand =await page.locator('.product-information p').filter({hasText:"Brand:"})
console.log(await brand.textContent())
await expect(brand).toBeVisible()



    await page.waitForTimeout(1000)

})
