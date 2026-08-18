import { test, expect } from "@playwright/test"
let loginData = [
    {
        "Username": "admin",
        "Password": "7796046400",
    },
    {
        "Username": "admin",
        "Password": "7796046402",
    },
    {
        "Username": "admin",
        "Password": "7796046401",
    }
]


test("espo ", async ({ page }) => {
     let count = 1
    for(let i=0; i<loginData.length+1; i++){
   
    if (count <= 3) {
        await page.goto('https://testyantrasrushti.espocloud.eu')

        await page.locator('#field-userName').fill(loginData[i].Username)
        await page.locator('#field-password').fill(loginData[i].Password)
        await page.locator('#btn-login').click()
        await page.waitForTimeout(1000)
         count++
       
      
    }
    else {
        console.log("unable to login")
    }

    }
})