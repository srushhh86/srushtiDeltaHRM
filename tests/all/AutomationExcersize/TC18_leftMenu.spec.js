import { test, expect } from "./CustomFixture"

let product={
    "women":"Dress",
    "men":"Tshirts"
}
test("resgiyser before ", async ({ page }) => {

await expect(page.locator("//h2[text()='Category']")).toBeVisible()

//click on category women
await page.locator("//a[@href='#Women']/span/i").click()
await page.locator('//a[@href="/category_products/1"]').click()

//await expect(page.locator(`//h2[text()='${product.women} - Dress Products']`)).toBeVisible()


//click on men

await page.locator("//a[@href='#Men']/span/i").click()
await page.locator('//a[@href="/category_products/3"]').click()

await expect(page.getByText("Men - Tshirts Products")).toBeVisible()
await expect(page.getByText(`Men > ${product.men}`)).toBeVisible()
await page.waitForTimeout(1000)

})
