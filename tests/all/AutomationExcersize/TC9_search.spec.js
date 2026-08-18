import { test, expect } from "./CustomFixture"


test("test case", async ({ page }) => {

await page.locator("//a[text()=' Products']").click()
await expect(page).toHaveURL(/products/)

//search product

let searchedText="Tops"

await page.getByPlaceholder('Search Product').fill(searchedText)
await page.locator('//button[@id="submit_search"]').click()

await expect(page.getByText('Searched Products')).toBeVisible()


let allProductSearchedNames=await page.locator('[class="productinfo text-center"] p').allTextContents()

for (const nameOFProduct of allProductSearchedNames) {
    if(nameOFProduct.toLocaleLowerCase().includes('top'))
    {
        console.log("included "+ nameOFProduct);

    }
    else
    {
    console.log("execuded "+nameOFProduct);
    }
}


    await page.waitForTimeout(1000)

})
