import {expect, test} from "@playwright/test"

test("fileuplpad",async ({page}) => {

    await page.goto("https://the-internet.herokuapp.com/")

    await page.getByRole("link",{name:"Frames"}).first().click()

    await page.getByRole("link",{name:" Nested Frames"}).click()

    
    let frame_left=await page.frame({name:"frame-left"})
    console.log(     frame_left.url());


    await page.waitForTimeout(2000)
    
})


