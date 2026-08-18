import { expect, test } from "@playwright/test"

test("guru 99  ", async ({ page }) => {
    await page.goto("https://demo.guru99.com/V4/")
    let email = "srushhh86@gmail.com"
    let pwd = "srushti615$"
    let username="srushti"
    let lastname='m'
    let ph="9844859398"


    let vehile={
        "incidents":"234",
        "Registration":"1234",
        "Annual_mileage":"24",
        "Estimated_value":"25",

    }
    await page.getByRole('link',{name:"Insurance Project"}).click()
await page.getByRole('link',{name:"Register"}).click()

//register
await page.locator('#user_firstname').fill(username)
await page.locator('#user_surname').fill(lastname)

await page.locator('#user_phone').fill(ph)

await page.locator('#user_dateofbirth_1i').selectOption({label:"1994"})
await page.locator('#user_dateofbirth_2i').selectOption({label:"April"})
await page.locator('#user_dateofbirth_3i').selectOption({label:"30"})


await page.locator('#user_licenceperiod').selectOption({label:"3"})
await page.locator('#user_user_detail_attributes_email').fill(email)

await page.locator('#user_user_detail_attributes_password').fill(pwd)

await page.locator('#user_user_detail_attributes_password_confirmation').fill(pwd)
await page.locator('//input[@value="Create"]').click()


//login
    await page.locator('#email').fill(email)
    await page.locator('#password').fill(pwd)
    await page.locator('//input[@name="submit"]').click()

    // request quation

    await page.locator('#newquote').click()

//fill form
await page.locator('//input[@id="quotation_incidents"]').fill(vehile.incidents)
await page.locator('#quotation_vehicle_attributes_registration').fill(vehile.Registration)
await page.locator('#quotation_vehicle_attributes_mileage').fill(vehile.Annual_mileage)
await page.locator('//input[@id="quotation_vehicle_attributes_value"]').fill(vehile.Estimated_value)
await page.locator('//input[@value="Save Quotation"]').click()

let identificationNum=await page.locator("//body/b[contains(text(),'identification number')]").textContent()
console.log(identificationNum);

await page.goBack()
await page.getByRole('link',{name:"Retrieve Quotation"}).click()
await page.getByPlaceholder('identification number').fill(identificationNum)
await page.locator('#getquote').click()

await page.goBack()
await page.locator('//input[@value="Log out"]').click()



})