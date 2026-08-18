import test, { expect } from "@playwright/test"

import { log } from "console"

let userinfo =
{
    "nameOF": "srushti",
    "password": "srushti615$",
    "day": "8",
    "month": "June",
    "year": "1997",

}

let addressInfo = {
    "firsname": "srushti",
    "lastname": "m",
    "company": "tekpyarmid",
    "address": "htype",
    "state": "karnataka",
    "city": "dandeli",
    "zipcode": "581325",
    "phoneNum": "786867576",
}


let email;

test.describe.configure({mode:"serial"})
test("register", async ({ page }) => {


    await page.goto("https://automationexercise.com/")

    await page.waitForLoadState()

    await expect(page).toHaveTitle("Automation Exercise")

    await page.getByRole('link', { name: " Signup / Login" }).click()

    let NewUSerSignUpVerify = await page.locator('//div[@class="signup-form"]/h2').textContent()
    await expect(NewUSerSignUpVerify).toBe('New User Signup!')

    await page.locator('//input[@placeholder="Name"]').fill(userinfo.nameOF)

    const num = Math.floor(Math.random() * 100) + 1;
    email = userinfo.nameOF + num + "@gmail.com"
    log(email)


    await page.locator('//input[@placeholder="Email Address" and  @data-qa="signup-email"]').fill(email)
    await page.getByRole("button", { name: "Signup" }).click()
    await expect(page.getByText("Enter Account Information")).toHaveText("Enter Account Information")

    //register

    await page.locator("#id_gender2").click()
    await page.locator('#password').fill(userinfo.password)
    await page.locator('#days').selectOption({ label: userinfo.day })
    await page.locator('#months').selectOption({ label: userinfo.month })
    await page.locator('#years').selectOption({ label: userinfo.year })


    //address info

    await page.locator("#first_name").fill(addressInfo.firsname)
    await page.locator('#last_name').fill(addressInfo.lastname)
    await page.locator('#company').fill(addressInfo.company)
    await page.locator("#address1").fill(addressInfo.address)
    await page.locator('#state').fill(addressInfo.state)
    await page.locator("#city").fill(addressInfo.city)
    await page.locator('#zipcode').fill(addressInfo.zipcode)

    await page.locator('#mobile_number').fill(addressInfo.phoneNum)
    await page.getByRole('button', { name: "Create Account" }).click()
    //verify acct created
    await expect(page.getByText("Account Created!")).toBeVisible()
    await page.getByRole('link', { name: "Continue" }).click()

    //verify user

    let usernameVerify = await page.locator("//a[text()=' Logged in as ']/b").textContent()
    await expect(usernameVerify).toBe(userinfo.nameOF)

    //await page.getByRole('link',{name:" Delete Account"}).click()

    //verify it is deleted

    //await expect(page.getByText('Account Deleted!')).toBeVisible()

    await page.waitForTimeout(1000)

})


test("login", async ({ page }) => {




    await page.goto("https://automationexercise.com/")
    await page.waitForLoadState()
    await expect(page).toHaveTitle("Automation Exercise")
    console.log("Email:", email);
console.log("Type:", typeof email);


    //click on signup
    await page.getByRole('link', { name: " Signup / Login" }).click()
    await page.locator('//input[@placeholder="Email Address" and @data-qa="login-email"]').fill(email)
    await page.locator('//input[@placeholder="Password" and @data-qa="login-password"]').fill(userinfo.password)
    await page.getByRole('button', { name: "Login" }).click()

    //verify username

    let usernameVerify = await page.locator("//a[text()=' Logged in as ']/b").textContent()
    await expect(usernameVerify).toBe(userinfo.nameOF)

    await page.getByRole('link', { name: " Delete Account" }).click()

    //verify it is deleted

    await expect(page.getByText('Account Deleted!')).toBeVisible()




    await page.waitForTimeout(1000)

})