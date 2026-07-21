import { test, expect } from '@playwright/test';
import HomePage from '../../delta_Page_Object_Model/homePage.js';
import { AdminPage } from '../../delta_Page_Object_Model/adminPage.js';

//test.use({ storageState: './StorageState/playwrightStorageState/auth.json' });

test('TC03 - Verify Admin submodules using storage state', async ({ page }) => {
    await page.goto(process.env.URL);

    const homePage = new HomePage(page);
    const adminPage = new AdminPage(page);

    await page.waitForLoadState('load');
    await homePage.adminLink.click();
    await page.waitForLoadState('load');
    await expect(adminPage.userManagementLink).toBeVisible({ timeout: 10000 });
    await expect(adminPage.jobLink).toBeVisible({ timeout: 10000 });
    await expect(adminPage.organizationLink).toBeVisible({ timeout: 10000 });
    await expect(adminPage.qualificationsLink).toBeVisible({ timeout: 10000 });
    await expect(adminPage.nationalitiesLink).toBeVisible({ timeout: 10000 });
    await expect(adminPage.corporateBrandingLink).toBeVisible({ timeout: 10000 });


});
