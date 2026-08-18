import { test, expect } from "@playwright/test"

test("flipkart travels", async ({ browser }) => {
    const context = await browser.newContext(
        { permissions: [] }
    )
    const page = await context.newPage()

    await page.goto('https://www.flipkart.com/travel/flights')
    await page.locator('//input[contains(@name,"departcity")]').fill("mumbai")

    const suggestion = await page.locator('//div[@class="oJTCI0"]')
    await suggestion.first().waitFor({ state: "visible" })
    await suggestion.first().click()

    await page.locator('//input[contains(@name,"arrivalcity")]').fill("Bengaluru")

    // await page.locator('//span[text()="Bengaluru"]/ancestor::div[@class="oJTCI0"]').nth(1).click()


    const suggestionSecond = await page.locator('//span[text()="Bengaluru"]/ancestor::div[@class="oJTCI0"]')
    await suggestionSecond.first().waitFor({ state: "visible" })
    await suggestionSecond.first().click()


    await page.locator('//input[contains(@name,"datefrom")]').click()

    await page.locator("//div[contains(text(),'August')]/ancestor::table/descendant::button[text()='14']").click()

    await page.locator('//input[contains(@name,"dateto")]').click()
    await page.locator("//div[contains(text(),'August')]/ancestor::table/descendant::button[text()='22']").click()

    await page.locator('//input[contains(@name,"travellerclasscount")]').click()
    await page.locator("//div[text()='Adults']/ancestor::div[@class='Os7m40']/descendant::button[@class='dSM5Ub aTgIxV uEsOKU']").click()
    await page.locator("//div[text()='Children']/ancestor::div[@class='Os7m40']/descendant::button[@class='dSM5Ub aTgIxV uEsOKU']").click()

    await page.locator('//button[text()="Done"]').click()

    await page.locator("//span[text()='SEARCH']/ancestor::button").click()

    await expect(page).toHaveURL(/travel\/flights\/search/, { timeout: 30000 })

    await page.locator('//div[@class="itpVy0"]').first().waitFor({state:"visible"})
    let pricesOFEach = await page.locator('//div[@class="itpVy0"]').allTextContents()
    let arr = []
    for (const price of pricesOFEach) {
        arr.push(price)
    }
    console.log(arr)

})