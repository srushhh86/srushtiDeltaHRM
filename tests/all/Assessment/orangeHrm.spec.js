import {expect, test} from "@playwright/test"

test("orange hrm",async ({page}) => {

test.setTimeout(350000)
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder("Username").fill("Admin")
     await page.getByPlaceholder("Password").fill("admin123")
     await page.getByRole('button',{name:"Login"}).click()

     await expect(page).toHaveURL(/index.php\/dashboard\/index/)
     await page.getByRole('link',{name:"PIM"}).click()
       await page.getByRole('link',{name:"Add Employee"}).click()
     await expect(page).toHaveURL(/pim\/addEmployee/)

       let randomNum = Math.floor(Math.random() * 1001);
       const empID='0'+randomNum
     const empname="srushtiprakash"+empID
     const username="srushti"+empID
     const password="srushti615$"
     const middlename="pp"
     const lastname="m"
    
    let [photoupload]=await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator("//button[@class='oxd-icon-button oxd-icon-button--solid-main employee-image-action']").click()
    ])

    await photoupload.setFiles("tests/Assessment/woman-white-outdoor.jpeg")

     await page.getByPlaceholder("First Name").fill(empname)
     await page.getByPlaceholder("Last Name").fill(lastname)
     //emply id
     await page.locator("//label[text()='Employee Id']/ancestor::div[@class='oxd-grid-item oxd-grid-item--gutters']/descendant::input").fill(empID)

     await page.locator('//span[@class="oxd-switch-input oxd-switch-input--active --label-right"]').click()
     await page.locator('//label[@class="oxd-label oxd-input-field-required" and text()="Username"]/ancestor::div[@class="oxd-grid-item oxd-grid-item--gutters"]/descendant::input').fill(username)
await page.locator('//label[@class="oxd-label oxd-input-field-required" and text()="Password"]/ancestor::div[@class="oxd-grid-item oxd-grid-item--gutters user-password-cell"]/descendant::input').fill(password)

await page.locator('//label[@class="oxd-label oxd-input-field-required" and text()="Confirm Password"]/ancestor::div[@class="oxd-grid-item oxd-grid-item--gutters"]/descendant::input').fill(password)
await page.getByRole('button',{name:"Save"}).click()
await page.locator('#oxd-toaster_1').waitFor({state:"visible"})
await  expect(page.locator('//p[@class="oxd-text oxd-text--p oxd-text--toast-message oxd-toast-content-text"]')).toHaveText("Successfully Saved")
//search employee
await page.getByRole('link',{name:"Employee List"}).click()
 await expect(page).toHaveURL(/pim\/viewEmployeeList/)
 

 //search employe
//  let empsearchbar=await page.locator("//label[text()='Employee Name']/ancestor::div[@class='oxd-grid-item oxd-grid-item--gutters']/descendant::input")
//      await empsearchbar.waitFor({state:"visible"}) 
//  await empsearchbar.fill(empname)

 //search ig

 await page.locator("//label[text()='Employee Id']/ancestor::div[@class='oxd-grid-item oxd-grid-item--gutters']/descendant::input").fill(empID)

await page.getByRole('button',{name:"Search"}).click()
await page.locator('//button[@class="oxd-icon-button oxd-table-cell-action-space"]').first().click()

//edit profile
await page.waitForLoadState('domcontentloaded')
// await page.getByPlaceholder("Middle Name").waitFor({state:"visible"})
await page.locator('//input[@placeholder="Middle Name"]').fill(middlename)

await page.locator('//label[text()="Nationality"]/ancestor::div[@class="oxd-grid-item oxd-grid-item--gutters"]/descendant::div[text()="-- Select --"]').click()
await page.locator("//div/span[text()='Indian']").click()

// await page.locator('//input[@type="radio" and @value="2"]').click()
await page.getByRole('button',{name:"Save"}).first().click()

//go to leave mopdule
await page.locator('//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name" and text()="Leave"]').click()
await expect(page).toHaveURL(/leave\/viewLeaveList/)

await page.locator("//span[text()='Entitlements ']").click()
await page.locator("//a[@class='oxd-topbar-body-nav-tab-link' and text()='Add Entitlements']").click()


let fullEmpname = `${empname} ${lastname}`;
console.log(fullEmpname);

let emplyename =await page.getByPlaceholder("Type for hints...")
await emplyename.fill(fullEmpname)
console.log(await emplyename.inputValue())

const searching=await page.locator("//div[text()='Searching....']")
await searching.waitFor({ state: 'hidden' });


let firstSearch=await page.locator('//div[@class="oxd-autocomplete-option"]').first()
console.log(await firstSearch.textContent());

await firstSearch.waitFor({state:'visible'})
//  await page.keyboard.press('Enter')
await firstSearch.click()

await page.locator('//div[@class="oxd-select-text-input"]').first().click()
await page.locator("//span[text()='US - Bereavement']").click()


await page.locator('//label[text()="Entitlement"]/ancestor::div[@class="oxd-grid-item oxd-grid-item--gutters"]/descendant::input').fill("20")
await page.getByRole('button',{name:"Save"}).click()

// await page.locator('#oxd-toaster_1').waitFor({state:"visible"})
await page.getByRole('button',{name:"Confirm"}).click()

//toaster verify
await page.locator('#oxd-toaster_1').waitFor({state:"visible"})


//logout
await page.locator("//span[@class='oxd-userdropdown-tab']").click()
await page.locator('//a[@class="oxd-userdropdown-link" and text()="Logout"]').click()









})