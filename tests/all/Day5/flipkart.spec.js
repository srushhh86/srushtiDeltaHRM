import {expect, test} from "@playwright/test"
import { time } from "node:console"

test("flipkart",async ({page}) => {
    await page.goto("https://www.flipkart.com/")
   await page.waitForLoadState('networkidle')
    await page.locator("//span[@class='b3wTlE']").click()

    await page.getByPlaceholder("Search for Products, Brands and More").first().fill("bags")
 
    await page.locator("//span[text()='bags']").first().waitFor()

    await page.locator("//div[text()=' for women']").click()

    //click on bag
    await page.locator("//div[text()='Brand']/..//*[local-name()='svg']").click()
   // await page.locator(".MocAag").fill("Caprese")

  // const brand=  page.locator("//div[@class='buvtMR' and text()='Caprese']/preceding-sibling::input[@type]")
    //await brand.check()

    await page.locator("//input[@type='checkbox']/following-sibling::div[text()='LAVIE']").click()
    await test.step("lavie bag item checked",async () => {
         await expect(page.locator("//input[@type='checkbox']/following-sibling::div[text()='LAVIE']")).toBeChecked()
        
    })
   

await page.waitForTimeout(time())

})