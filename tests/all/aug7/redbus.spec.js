import { test, expect } from "@playwright/test"



test("redbus ", async ({ page }) => {
    await page.goto('https://www.redbus.in/')
    await page.locator('//input[@id="srcinput"]').fill("Bengaluru")
    await page.locator('//div[@aria-label="Anand Rao Circle, Bengaluru"]').waitFor({ state: "visible" })
    await page.locator('//div[@aria-label="Anand Rao Circle, Bengaluru"]').click()
    await page.locator('//input[@id="destinput"]').fill("Dandeli")
    await page.locator('//div[@aria-label="Dandeli"]').waitFor({ state: "visible" })

    await page.locator('//button[contains(@class,"searchButtonWrapper")]').click()
    await page.waitForTimeout(3000)

    await expect(page).toHaveURL(/search/)

    await page.waitForLoadState("load");



    // await page.locator('//div[contains(@aria-label,"Free Cancellation")]').click()
    await page.locator('//div[contains(@aria-label,"SLEEPER")]').click()
    await page.locator('//div[contains(@aria-label,"NONAC") and contains(@class,"mainContainer")]').click()
    //  await page.locator('//div[contains(@aria-label,"18:00-24:00")]]').click()
    await page.locator('//div[contains(@aria-label,"High Rated Buses")]').click()
    await page.locator('//div[contains(@aria-label,"Single Seats") and contains(@class,"mainContainer")]').click()

    await page.locator('//div[contains(@class,"travelsName")]').first().waitFor()
    const travelNames = await page.locator('//div[contains(@class,"travelsName")]').allTextContents()

    await await page.locator('//p[contains(@class,"finalFare")]').first().waitFor()
    const priceList = await page.locator('//p[contains(@class,"finalFare")]').allTextContents()
    let i = 0
    let travelArr = []
    let priceArr = []
    for (const travelName of travelNames) {
        travelArr.push(travelName)
        priceArr.push(priceList[i++])
    }

    console.log(travelArr)
    console.log(priceArr)

    await page.waitForTimeout(3000)
})