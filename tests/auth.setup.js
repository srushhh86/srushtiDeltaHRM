import { test,expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';
import Login from '../delta_Page_Object_Model/loginPage.js';

const storageStatePath = path.resolve('StorageState/playwrightStorageState/auth.json');

fs.mkdirSync(path.dirname(storageStatePath), { recursive: true });

test('Create Playwright storage state', async ({ page }) => {
    const loginPg = new Login(page);

    await loginPg.loginToApplication(
        process.env.URL,
        process.env.User_Name,
        process.env.Password
    );

    await expect(page).toHaveURL(/dashboard/,{timeout:10000});

    await page.context().storageState({ path: storageStatePath });
});
