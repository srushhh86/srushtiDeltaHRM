import {test} from "@playwright/test"

test("fileuplpad",async ({page}) => {

    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.locator("#file-upload").setInputFiles("/Users/srushtimarihal/Downloads/JSANDPW_PRACTICE/PW_practice/tests/Day1/IMG-20260511-WA0010.jpg")
    await page.locator("#file-submit").click()

    await page.waitForTimeout(2000)
    
})

