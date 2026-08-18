import { expect, test } from "@playwright/test";

test("ESPoCRM login should handle rapid multiple clicks on Log in", async ({ page }) => {
    await page.goto("https://testyantra.espocloud.eu/", { waitUntil: "domcontentloaded" });

    await page.getByLabel("Username").fill("admin");
    await page.getByLabel("Password").fill("75054191");

    const loginButton = page.getByRole("button", { name: /log in/i });
    await expect(loginButton).toBeVisible();
    await expect(loginButton).toBeEnabled();

    await Promise.all([
        loginButton.click(),
        loginButton.click(),
        loginButton.click(),
        loginButton.click(),
    ]);

//    await expect(page.getByRole("link", { name: /home/i })).toBeVisible({ timeout: 30000 });
  //  await expect(page.getByRole("heading", { name: /stream/i })).toBeVisible({ timeout: 30000 });
});
