

import { test, expect } from "../../Fixtures/baseFixture.js"
import HomePage from "../../delta_Page_Object_Model/DashBoardModule/homePage.js"
import { PIMPage } from "../../delta_Page_Object_Model/PIMModule/PIMPage.js"
import { AddEmployee } from "../../delta_Page_Object_Model/PIMModule/addEmployee.js"
import employeeData from "../../TestData/employeeData.json"
import CommonUtils from "../../delta_Utility/commonUtils.js"
import fs from 'fs';
import employeeGeneratedData from "../../TestData/employeeGeneratedData.json"
import { ActionUtils } from "../../delta_Utility/actionUtils.js"


const profileFilePath='customFolder/uploadFolder/profilePicture.png'

test("create Employee", async ({ loginPage }) => {
    const page = loginPage
    let homePage = new HomePage(page)
    let pimpage = new PIMPage(page)
    let addEmployee = new AddEmployee(page)

    await homePage.PIMLink.waitFor({ state: "visible" })
    await homePage.PIMLink.click()

    await page.waitForLoadState("load")
    await pimpage.addEmployeeLink.waitFor({ state: "visible", timeout: 20000 })

    //validate

    await expect(pimpage.addEmployeeLink).toBeVisible({ timeout: 10000 });

    await pimpage.addEmployeeLink.click()

    await expect(page).toHaveURL(/pim\/addEmployee/, { timeout: 10000 })

    const randomNum = CommonUtils.getRandomNumber(10000)

    console.log(randomNum)
    // Generate random employee data
    employeeGeneratedData.empnameRandom = employeeData.empname + randomNum
    employeeGeneratedData.usernameRandom = employeeData.username + randomNum
    employeeGeneratedData.empIDRandom = randomNum.toString()

    // Write the generated data to a JSON file
    fs.writeFileSync('TestData/employeeGeneratedData.json', JSON.stringify(employeeGeneratedData, null, 2));


    //upload the employee image

    await ActionUtils.uploadUsingFileChooser(page, addEmployee.uploadImageBtn, profileFilePath)

        //fill the employee details
    await addEmployee.createEmployee(
        employeeGeneratedData.empnameRandom,
        employeeGeneratedData.lastname,
        employeeGeneratedData.empIDRandom,
        employeeGeneratedData.usernameRandom,
        employeeGeneratedData.password
    )

    await addEmployee.succesfullToaster.waitFor({ state: "visible" })
    await expect(addEmployee.toasterMessage).toHaveText("Successfully Saved", { timeout: 10000 })

})