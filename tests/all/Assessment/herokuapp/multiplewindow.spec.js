import {expect, test} from "@playwright/test"

test("fileuplpad",async ({page}) => {

    await page.goto("https://the-internet.herokuapp.com/")

    await page.getByRole("link",{name:"Multiple Windows"}).click()

   let [newWindow]= await Promise.all([page.waitForEvent('popup'),
page.getByRole("link",{name:"Click Here"}).click()
    ])


    await expect(newWindow.url()).toContain("https://the-internet.herokuapp.com/windows/new")


  await newWindow.screenshot({path:"/Users/srushtimarihal/Downloads/JSANDPW_PRACTICE/PW_practice/tests/Day1/Screenshot.png"})
    await newWindow.waitForTimeout(2000)
    
})


