import {test} from "@playwright/test"
test("verify color",async ({page}) => {
    await test.slow()

    await page.goto("https://www.tutorialspoint.com/selenium/practice/webtables.php")
    const allage = await page.locator('//tbody/tr/td[3]').allTextContents()
    console.log(allage)

    let target=29
    let count=1
    for (const element of allage) {
        if(element===target)
        {
            count++
        }
        
    }  
    if(count>1)
        {
            console.log(`element  ${target} is duplicate`);
            
        }  
  
})