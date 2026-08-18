
import { expect, test } from "@playwright/test"

test.describe("NopCommerce", () => {

    test("nocommerence", async ({ page }) => {

        await test.setTimeout(20000)

        await page.goto("https://www.saucedemo.com/")
        await page.getByPlaceholder("Username").fill("standard_user")
         await page.getByPlaceholder("Password").fill("secret_sauce")
        await page.locator("#login-button").click()

        await expect(page).toHaveURL(/inventory/)


        //first item
        await page.locator(".product_sort_container").selectOption({label:"Name (A to Z)"})

        await page.locator('//div[@class="inventory_item_description"]/descendant::button').first().click()
        //second item

         await page.locator(".product_sort_container").selectOption({value:"lohi"})
           await page.locator('//div[@class="inventory_item_description"]/descendant::button').first().click()

          await expect (page.locator('.shopping_cart_badge')).toHaveText('2')
          await page.locator(".shopping_cart_link").click()

          //remove
          await page.locator("//div[@class='cart_item']/descendant::button").first().click()
          await page.locator("#checkout").click()


          //add details
          await page.locator("#first-name").fill("srushti")
        await page.locator("#last-name").fill("m")
        await page.locator("#postal-code").fill("560010")
        await page.locator("#continue").click()

        await expect(page).toHaveURL(/checkout-step-two/)

       let totalPrce= await page.locator(".summary_total_label").textContent()
       console.log(totalPrce)
        
        await page.locator("#finish").click()

        await expect(page.locator(".complete-header")).toContainText("Thank you for your order!")

        await page.locator("#back-to-products").click()




       


    

        await page.waitForTimeout(1000)




    })






})