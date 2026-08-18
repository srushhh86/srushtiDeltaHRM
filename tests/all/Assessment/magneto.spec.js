import { expect, test } from "@playwright/test"

test("magneto", async ({ page }) => {


    await page.goto("https://magento2-demo.magebit.com/")
  
    await page.waitForTimeout(2000)



})