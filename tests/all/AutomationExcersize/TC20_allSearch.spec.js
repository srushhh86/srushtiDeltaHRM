import { test, expect } from "./CustomFixture"
import data from "./testData1.json"

let productSearch =
{
    "item": "tops"
}
test("all search before ", async ({ page }) => {

    await page.locator("//a[text()=' Products']").click()

    //click on search 
    await page.locator("//input[@id='search_product']").fill(productSearch.item)

    await page.locator('#submit_search').click()

    await expect(page.getByText('Searched Products')).toBeVisible()

    await expect(page).toHaveURL(`https://automationexercise.com/products?search=${productSearch.item}`)

    //add product to cart

    await page.locator('//img[@src="/get_product_picture/5"]/parent::div/descendant::a').click()

    await page.locator('//button[text()="Continue Shopping"]').click()


    await page.locator('//img[@src="/get_product_picture/6"]/parent::div/descendant::a').click()
    await page.locator('//a/u[text()="View Cart"]').click()


    //go to cart
    await page.locator('//a[text()=" Cart"]').click()
    await expect(page).toHaveURL(/view_cart/)


    await expect(page.locator('//a[@href="/product_details/5"]')).toContainText("Winter Top")
    await expect(page.locator('//a[@href="/product_details/6"]')).toContainText("Summer White Top")


    //click on signup
    await page.getByRole('link', { name: " Signup / Login" }).click()
    await page.locator('//input[@placeholder="Email Address" and @data-qa="login-email"]').fill(data.email)
    await page.locator('//input[@placeholder="Password" and @data-qa="login-password"]').fill(data.password)
    await page.getByRole('button', { name: "Login" }).click()

    //verify username

    let usernameVerify = await page.locator("//a[text()=' Logged in as ']/b").textContent()
    await expect(usernameVerify).toBe("srushti")

    
 //go to cart
    await page.locator('//a[text()=" Cart"]').click()
    await expect(page).toHaveURL(/view_cart/)


    await expect(page.locator('//a[@href="/product_details/5"]')).toContainText("Winter Top")
    await expect(page.locator('//a[@href="/product_details/6"]')).toContainText("Summer White Top")


})
