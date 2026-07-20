import { test, expect } from '@playwright/test';
import Login from '../../delta_Page_Object_Model/loginPage.js';
import negativeLoginData from '../../TestData/negativeLoginData.json' assert { type: 'json' };

test.use({
  storageState: { cookies: [], origins: [] },
});

test('TC02 - Validate login with negative credentials', async ({ page }) => {
    const loginPg = new Login(page);

    await loginPg.loginToApplication(
        process.env.URL,
        negativeLoginData.username,
        negativeLoginData.password
    );

    await expect(page.locator('.oxd-alert-content-text')).toContainText('Invalid credentials',{timeout:10000});
});
