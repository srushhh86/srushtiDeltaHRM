import {expect, test} from "@playwright/test"

test("no com ",async ({page}) => {
    await page.goto("https://admin-demo.nopcommerce.com/login")
    await page.locator('#Email').fill("admin@yourstore.com")
    await page.locator('#Password').fill('admin')
    await page.getByRole('button',{name:"Log in"}).click()

    await page.locator('//li[@class="nav-item has-treeview"]/a[@class="nav-link"]/p[contains(text(),"Catalog")]').click()

await page.getByRole('link',{name:"Products"}).click()
await page.getByRole('link',{name:"Add new"}).click()
await page.locator('#Name').fill("Oneplus z8")
await page.getByRole('button',{name:"Save"}).click()

})


// test.skip("no cmom client ",async ({page}) => {
//     await page.goto("https://demo.nopcommerce.com/login")
//     await page.pause()
   
// await page.getByRole('button',{name:"Register"}).click()



// })
