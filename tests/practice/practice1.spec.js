import {test,expect} from "@playwright/test"

test("practice",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const alltext=await page.locator('//table[@id="taskTable"]/tbody[@id="rows"]/tr[td[text()="System"]]/td').allTextContents()
 for(const text of alltext )
 {
     if(text.trim().endsWith('MB'))
        console.log(text)
    
 }
})