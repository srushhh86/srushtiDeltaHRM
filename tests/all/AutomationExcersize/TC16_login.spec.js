import { test, expect } from "./CustomFixture"
import data from "./testData1.json"

 let userinfo =
    {
         "nameOF":"srushti",
  

    }

      let addressInfo={
        "firsname":"srushti",
        "lastname":"m",
        "company":"tekpyarmid",
        "address":"htype",
        "state":"karnataka",
        "city":"dandeli",
        "zipcode":"581325",
        "phoneNum":"786867576",
    }
let commentArea =
{
    "comment": "i want it to be delivered in two days"
}

let paymentDetails = {
    "nameOfCard": 'srushti',
    "cardNum": "123456789123",
    "CVC": "123",
    "ExpirationMonth": "12",
    "expirationYear": "2000"
}
test("resgiyser before ", async ({ page }) => {


    //register login

    await page.locator("//a[text()=' Signup / Login']").click()

    await page.locator('//input[@placeholder="Email Address" and @data-qa="login-email"]').fill(data.email)
    await page.locator('//input[@placeholder="Password" and @data-qa="login-password"]').fill(data.password)
    await page.getByRole('button', { name: "Login" }).click()

    //verify username

    let usernameVerify = await page.locator("//a[text()=' Logged in as ']/b").textContent()
    await expect(usernameVerify).toBe(userinfo.nameOF)

   

    //add products


    await page.locator("//a[text()=' Products']").click()
    await expect(page).toHaveURL(/products/)

    //hover first product
    await page.locator('.productinfo.text-center').first().hover()
    await page.locator('//a[@data-product-id="1"]').first().click()

    await page.locator('//button[text()="Continue Shopping"]').click()

    //hover second

    await page.locator('.productinfo.text-center').nth(1).hover()
    await page.locator('//a[@data-product-id="2"]').nth(1).click()
    await page.locator('//button[text()="Continue Shopping"]').click()

    //hover thr=ird

    await page.locator('.productinfo.text-center').nth(2).hover()
    await page.locator('//a[@data-product-id="3"]').nth(1).click()
    await page.locator('//a/u[text()="View Cart"]').click()


    //go to cart
    await page.locator('//a[text()=" Cart"]').click()
    await expect(page).toHaveURL(/view_cart/)

    //checkout
    await page.locator("//a[text()='Proceed To Checkout']").click()


    //click on cart
    await page.locator('//a[text()=" Cart"]').click()
    await expect(page).toHaveURL(/view_cart/)

    //checkout
    await page.locator("//a[text()='Proceed To Checkout']").click()


    //validate address
    //await expect(page.locator('#address_delivery .address_firstname.address_lastname')).toHaveText(addressInfo.firsname+addressInfo.lastname)
    await expect(page.locator('#address_delivery .address_address1.address_address2').first()).toHaveText(addressInfo.company)
    await expect(page.locator('#address_delivery .address_address1.address_address2').nth(1)).toHaveText(addressInfo.address)
    await expect(page.locator('#address_delivery .address_phone').first()).toHaveText(addressInfo.phoneNum)




    await expect(page.getByText('Your delivery address')).toBeVisible()

    await page.locator('//textarea[@name="message"]').fill(commentArea.comment)

    await page.getByRole('link', { name: "Place Order" }).click()

    //payment details

    await page.locator('//input[@name="name_on_card"]').fill(paymentDetails.nameOfCard)
    await page.locator('//input[@name="card_number"]').fill(paymentDetails.cardNum)

    await page.locator('//input[@name="cvc"]').fill(paymentDetails.CVC)
    await page.locator('//input[@name="expiry_month"]').fill(paymentDetails.ExpirationMonth)


    await page.locator('//input[@name="expiry_year"]').fill(paymentDetails.expirationYear)
    await page.locator('#submit').click(),





        await expect(page.getByText('Order Placed!')).toBeVisible()

    //click on continue
    await page.getByRole('link', { name: "Continue" }).click()


    // await page.getByRole('link', { name: " Delete Account" }).click()

    // //verify it is deleted

    // await expect(page.getByText('Account Deleted!')).toBeVisible()
    await page.waitForTimeout(1000)

})
