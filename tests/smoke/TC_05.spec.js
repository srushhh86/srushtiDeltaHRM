import { test, expect } from "../../Fixtures/baseFixture.js"
import HomePage from "../../delta_Page_Object_Model/homePage.js"

test("verify dashboard widget is visible", async ({ loginPage }) => {
    let page = loginPage
    let homepage = new HomePage(page)
    await expect(page.locator("//h6[.='Dashboard']")).toHaveText("Dashboard", { timeout: 10000 })

    await page.waitForLoadState("load")
    await expect(homepage.adminLink).toBeVisible({ timeout: 10000 });
    await expect(homepage.PIMLink).toBeVisible({ timeout: 10000 });
    await expect(homepage.leaveLink).toBeVisible({ timeout: 10000 });
    await expect(homepage.recruitmentLink).toBeVisible({ timeout: 10000 });
    await expect(homepage.performanceLink).toBeVisible({ timeout: 10000 });
    await expect(homepage.directoryLink).toBeVisible({ timeout: 10000 });
    await expect(homepage.maintenanceLink).toBeVisible({ timeout: 10000 });
    await expect(homepage.claimLink).toBeVisible({ timeout: 10000 });
    await expect(homepage.buzzLink).toBeVisible({ timeout: 10000 });

})