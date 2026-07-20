import { test } from "@playwright/test"
import Login from "../../delta_Page_Object_Model/loginPage"


test.use({
  storageState: { cookies: [], origins: [] },
});

test("Login with Valid Credentials", async ({page}) => {

    let loginPg = new Login(page)
    await loginPg.loginToApplication()
})