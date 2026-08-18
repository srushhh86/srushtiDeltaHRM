import test, { expect } from "@playwright/test"






test("register", async ({ page }) => {


    await page.goto("https://automationexercise.com/")

    await page.waitForLoadState()

    await expect(page).toHaveTitle("Automation Exercise")

    await page.getByRole('link', { name: " Signup / Login" }).click()

    let NewUSerSignUpVerify = await page.locator('//div[@class="signup-form"]/h2').textContent()
    await expect(NewUSerSignUpVerify).toBe('New User Signup!')


    //signup

    await page.locator('//input[@placeholder="Name"]').fill("srushti")

    await page.locator('//input[@placeholder="Email Address" and  @data-qa="signup-email"]').fill("srushhh86@gmail.com")
    await page.getByRole("button", { name: "Signup" }).click()

    //verify error

    await expect(page.getByText("Email Address already exist!")).toBeVisible()





    await page.waitForTimeout(1000)

})
