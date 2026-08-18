import test, { expect } from "@playwright/test"
import { log } from "console"



let userinfo =
    {
        
        "username": "srushti30@gmail.com",
        "password": "srushti615$",


    }

test("register", async ({ page }) => {
    


    await page.goto("https://automationexercise.com/")
    await page.waitForLoadState()
    await expect(page).toHaveTitle("Automation Exercise")


    //click on signup
        await page.getByRole('link',{name:" Signup / Login"}).click()
        await page.locator('//input[@placeholder="Email Address" and @data-qa="login-email"]').fill(userinfo.username)
        await page.locator('//input[@placeholder="Password" and @data-qa="login-password"]').fill(userinfo.password)
        await page.getByRole('button',{name:"Login"}).click()

       //verify error msg
       

  await expect(await page.getByText('Your email or password is incorrect!')).toBeVisible()




    await page.waitForTimeout(1000)

})