import { expect, test } from "@playwright/test"

test(" demo web shop  ", async ({ page }) => {



    let registration = {
        "firstname": "srush",
        "lastname": "m",
        "email": "srush@gmai.com",
        "password": "srushti615$"

    }

    let product={
        "productname":"blue"
    }

    await page.goto("https://demowebshop.tricentis.com/")
    await page.locator("//a[text()='Register']").click()
    //register

    await page.locator('#gender-female').click()
    await page.locator("#FirstName").fill(registration.firstname)
    await page.locator("#LastName").fill(registration.lastname)
    await page.locator("#Email").fill(registration.email)
    await page.locator("#Password").fill(registration.password)
    await page.locator("#ConfirmPassword").fill(registration.password)
    await page.locator("#register-button").click()


    await page.getByRole('link',{name:"Log in"}).click()

    //verify login page
//     await expect(page).toHaveURL(/login/)
//     await page.locator('#Email').fill(registration.email)
//      await page.locator('#Password').fill(registration.email)
//    await page.getByRole('button',{name:"Log in"}).click()

   await page.locator('//input[@name="q"]').fill(product.productname)
   await page.locator('//input[@value="Search"]').click()


   //search hisyory

   await page.locator('#products-orderby').selectOption({label:"Name: A to Z"})
   await page.locator('#products-pagesize').selectOption({label:"4"})
   await page.locator('//input[@value="Add to cart"]').nth(0).click()
   await page.locator('//div[@class="overview"]/descendant::input[@value="Add to cart"]').click()
await page.goBack()
      await page.locator('//input[@value="Add to cart"]').nth(1).click()
            await page.locator('//input[@value="Add to cart"]').nth(2).click()

            await page.getByRole('link',{name:"Shopping cart"}).first().click()

            await page.locator('//select[@id="CountryId"]').selectOption({label:"India"})
            await page.locator('//input[@id="termsofservice"]').click()

await page.locator('//button[@id="checkout"]').click()

            await page.waitForTimeout(2000)
})