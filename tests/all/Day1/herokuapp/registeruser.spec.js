import test, { expect } from "@playwright/test"


test("register",async({page})=>{

    await page.goto("https://automationexercise.com/")
    
   await page.waitForLoadState()
   
    await expect(page).toHaveTitle("Automation Exercise")
 //   await page.getByRole("link",{name:"Logout"}).click()

    await page.getByRole("link",{name:"Signup / Login"}).click()

    await expect(page.getByRole("heading",{level:2,name:"New User Signup!"})).toContainText('Signup')

    let nameOF="srush"
    await page.getByPlaceholder("Name").fill(nameOF)

    const num = Math.floor(Math.random() * 100) + 1;
console.log(num);
    let email="srush"+num+"@gmail.com"

 await page.locator('//input[@placeholder="Email Address" and  @data-qa="signup-email"]').fill(email)
 await page.getByRole("button",{name:"Signup"}).click()
 await expect(page.getByText("Enter Account Information")).toHaveText("Enter Account Information")
 await page.locator("#id_gender2").click()
 await page.getByRole("textbox",{name:"password"}).fill("123456")

 await page.mouse.wheel(0, 100)
// await page.getByRole('combobox',{name:"Day"}).selectOption({index:5})
await page.locator("#days").selectOption({index:5})
await page.locator("#months").selectOption({label:"October"})
 await page.locator("#years").selectOption("1998")

 //await page.getByRole('combobox',{name:"months"}).selectOption({label:"February"})

 await page.getByRole('checkbox',{name:"newsletter"}).click()
  await page.locator("#optin").click()

  await page.locator("#first_name").fill("srush ")
  await page.locator("#last_name").fill(" m")
    await page.locator("#company").fill(" Tp")
  await page.locator("#address1").fill(" htype")
    await page.locator("#country").selectOption("India")
  await page.locator("#state").fill("karnataka ")
  await page.locator("#city").fill("dandeli")
    await page.locator("#zipcode").fill("581384")
  await page.locator("#mobile_number").fill("987658578")
  await page.getByRole('button',{name:"Create Account"}).click()


await expect(page.getByText("Account Created!")).toBeVisible()

await page.getByRole('link',{name:"Continue"}).click()


await expect(page.getByText(`Logged in as ${nameOF}`)).toBeVisible()

  await page.waitForTimeout(3000)

await page.getByRole('link',{name:"Delete Account"}).click()


await expect(page.getByText("Account Deleted!")).toBeVisible()

    await page.waitForTimeout(3000)
     
})