import { test, expect } from "./CustomFixture"
//import { expect } from "@playwright/test"

let contactUS = {
    "name": "srushti",
    "email": 'srushti@gmail.com',
    "subject": "UI issue  ",
    "message": "login UI is not clear"
}
test("register", async ({ page }) => {

    page.on("dialog", async (dialog) => {
        if (dialog.type() === 'confirm') {
            console.log(await dialog.message())
            await dialog.accept()
        }


    })

    await page.getByRole("link", { name: " Contact us" }).click()


    await expect(page.getByText('Get In Touch')).toBeVisible()

    //fill details

    await page.locator('//input[@placeholder="Name"]').fill(contactUS.name)
    await page.locator('//input[@placeholder="Email"]').fill(contactUS.email)
    await page.locator('//input[@placeholder="Subject"]').fill(contactUS.subject)
    await page.locator('#message').fill(contactUS.message)
    await page.locator('//input[@name="upload_file"]').setInputFiles("tests/AutomationExcersize.spec.js/image.png")
 await page.waitForLoadState('load')
    await page.locator('//input[@value="Submit"]').click()
   

    //  let msg=await page.locator('//div[@class="status alert alert-success"]')


    await expect(page.locator('//div[@class="status alert alert-success" and text()="Success! Your details have been submitted successfully."]')).toBeVisible()

    ///go back
    await page.locator('//div[@id="form-section"]').waitFor({state:"visible"})
     await page.getByRole('link',{name:" Home"}).nth(1).click()
    await page.waitForLoadState('domcontentloaded')
    await expect(page).toHaveTitle("Automation Exercise")









    await page.waitForTimeout(1000)

})
