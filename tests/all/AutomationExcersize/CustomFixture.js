
import { test as base,expect} from "@playwright/test"

export const test = base.extend({

    page: async ({ page },use) => {
        await page.goto("https://automationexercise.com/")

        await page.waitForLoadState()

        await expect(page).toHaveTitle("Automation Exercise")

        await use(page)

    }
}
)

export { expect };

