

import{test,expect}from"../../Fixtures/baseFixture.js"
import HomePage from "../../delta_Page_Object_Model/homePage.js"
import { PIMPage } from "../../delta_Page_Object_Model/PIMPage.js"

test("User should able to search for an employee in the PIM Employee List",async({loginPage})=>
{
    const page=loginPage
    let homePage= new HomePage(page)
    let pimpage=new PIMPage(page)

    await homePage.PIMLink.waitFor({state:"visible"})
    await homePage.PIMLink.click()

    await page.waitForLoadState("load")
    await pimpage.employeeListLink.waitFor({state:"visible"})

    //validate

    await expect(pimpage.employeeListLink).toBeVisible({ timeout: 10000 });
    await expect(pimpage.addEmployeeLink).toBeVisible({ timeout: 10000 });
    await expect(pimpage.reportLink).toBeVisible({ timeout: 10000 });

})