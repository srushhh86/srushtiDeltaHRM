import { expect, test } from "@playwright/test"

test("php ", async ({ page }) => {

    test.setTimeout(350000)
    await page.goto("https://phptravels.net/")
    await page.waitForLoadState('load')
    await page.locator("#acknowledgeDemoWarning").click()

    //login
    // await page.getByRole('link',{name:"login"}).click()
    //     await page.waitForLoadState('domcontentloaded')

    // let username="srushhh86@gmail.com"
    // let password="srushti615$"
    // await page.locator("#email").fill(username)
    // await page.locator("#password").fill(password)

    // await page.getByRole('button',{name:"Sign In to your account"}).click()

    let location="bangalore"
 await page.locator("//span[text()='Stays']").click()
 await page.locator('#st_dest_trigger').click()
 await page.locator("#st_dest_q").fill(location)
 await page.locator("//div[contains(@class,'flex items-center gap-3 px-3 ')]").click()

 //dates
 await page.locator('//input[@name="checkin_date"]').click()

 await page.locator('//div[@class="datepicker-days"]/descendant::div[text()="16"]').first().click()
await page.locator('//div[@class="datepicker-days"]/descendant::div[text()="17"]').nth(1).click()
await page.locator('#st_guests_trigger').click()

await expect(await page.locator('//span[@x-text="room.adults"]').textContent()).toBe("2")
await page.locator('#st_nat_trigger').click()
await page.locator('#st_nat_q').fill("india")
await page.locator('//span[text()="India"]').nth(1).click()
await page.locator("//button[@title='Search Hotels']").click()
await expect(page).toHaveURL(/stays\/bangalore/)

await page.locator('#accommodation-Hotel').check()
await expect(page.locator('#accommodation-Hotel')).toBeChecked()

await page.locator('#star-5').check()
await expect(page.locator('#star-3')).toBeChecked()

//click on more detaiks
await page.locator('//div[@class="hotel-card-animate"]/descendant::a/span[text()="More Details"]').first().click()

await page.locator('//select[contains(@x-model,"optionQuantities") and @class]').first().selectOption({label:"1"})

await page.locator("//div[@x-show='roomData.visible']/descendant::span[text()='Select']").nth(1).click()

await page.locator("//span[contains(text(),'lock')]").click()

await page.waitForLoadState('load')

await page.locator('//select[@class="select"]').first().selectOption({value:"Mrs"})
await page.getByPlaceholder('Enter First Name').fill("srushti")

await page.getByPlaceholder('Enter Last Name').fill("m")

await page.locator('#quick_login_email').fill("sru@gmail.com")
await page.locator('//select[@x-model="primary_guest.country_code"]').selectOption({value:"91"})


await page.getByPlaceholder('Enter Phone Number').fill('8744757897')
await page.locator('#terms_accepted').click()
await page.locator('//button[@type="submit"]').click()





})