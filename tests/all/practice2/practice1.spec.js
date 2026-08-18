import {test} from "@playwright/test"
test("practice",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
   const text= await page.locator('//table[@id="taskTable"]/tbody[@id="rows"]/tr[td[text()="Firefox"]]/td').allTextContents()
   console.log(text)
   for (const eachData of text) {
    if(eachData.trim().endsWith("MB")) {
      console.log(eachData)
 
   }
}

})