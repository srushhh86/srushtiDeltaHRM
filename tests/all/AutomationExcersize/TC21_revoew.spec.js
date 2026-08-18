import { test, expect } from "./CustomFixture"
import data from "./testData1.json"

let review = {
    "name": "srushti",
    "email": "srushti12@gmail.com",
    "review":"good product"

}
test("all search before ", async ({ page }) => {

    await page.locator("//a[text()=' Products']").click()

    await expect(page.getByText('All Products')).toBeVisible()

    await page.locator('//a[@href="/product_details/1"]').click()


    await page.locator('#name').fill(review.name)
    await page.locator('#email').fill(review.email)
    await page.locator('#review').fill(review.review)
    await page.locator('#button-review').click()


    await expect(page.getByText('Thank you for your review.')).toBeVisible()






})
