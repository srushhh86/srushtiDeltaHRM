import test, { expect } from "@playwright/test"
import { log } from "console"

import fs from 'fs'

const data =JSON.parse(fs.readFileSync('tests/all/AutomationExcersize/testData.json','utf-8'))
console.log(data.email);

 let userinfo =
    {
         "nameOF":"srushti",
        "password": "srushti615$",


    }

    
test("register", async ({ page }) => {
   


    await page.goto("https://automationexercise.com/")
    await page.waitForLoadState()
    await expect(page).toHaveTitle("Automation Exercise")


    //click on signup
        await page.getByRole('link',{name:" Signup / Login"}).click()
        await page.locator('//input[@placeholder="Email Address" and @data-qa="login-email"]').fill(data.email)
        await page.locator('//input[@placeholder="Password" and @data-qa="login-password"]').fill(userinfo.password)
        await page.getByRole('button',{name:"Login"}).click()

       //verify username
       
    let usernameVerify=await page.locator("//a[text()=' Logged in as ']/b").textContent()
  await expect(usernameVerify).toBe(userinfo.nameOF) 

    await page.getByRole('link',{name:"Logout"}).click()

   //verify it is logged out

  await expect(page).toHaveURL(/login/)




    await page.waitForTimeout(1000)

})