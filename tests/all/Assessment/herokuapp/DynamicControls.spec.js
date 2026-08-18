
import {expect, test} from "@playwright/test"

test("fileuplpad",async ({page}) => {

    await page.goto("https://the-internet.herokuapp.com/dynamic_controls")


  await page.getByRole('button',{name:"Remove"}).click()
  await expect(page.locator("#checkbox")).toBeHidden()

    await page.waitForTimeout(2000)
    
})

