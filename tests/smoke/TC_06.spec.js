import{test,expect}from"@playwright/test"

import HomePage from "../../delta_Page_Object_Model/homePage.js"
import ChangePassword from "../../delta_Page_Object_Model/changepasswordPage.js"
test("User should able to 'change the logged-in user's own account password' ",async({page})=>
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    let hmpg= new HomePage(page)
    let chpwd= new ChangePassword(page)

    await hmpg.profilePic.click()
    await hmpg.changePasswordLink.click()
    await expect(chpwd.heading).toContainText("Update Password",{timeout:10000})
    await chpwd.changeOrUpdatePassword()
    await chpwd.confirmationMsg.waitFor({state: "visible"})
    await expect(chpwd.confirmationMsg).toContainText("Successfully",{timeout:20000})
    

})