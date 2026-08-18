import { test, expect } from "./CustomFixture"


test("test case", async ({ page }) => {

await page.getByText('Subscription').scrollIntoViewIfNeeded()
    await expect(page.getByText('Subscription')).toBeVisible()

    await page.locator('#susbscribe_email').fill("sru@gmail.com")
    await page.locator('#subscribe').click()

    let sucessMsg=await page.locator('.alert-success.alert')
    await expect(sucessMsg).toBeVisible()
    await expect(sucessMsg).toContainText("You have been successfully subscribed!")

    await page.waitForTimeout(1000)

})
