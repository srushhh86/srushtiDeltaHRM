
import {expect, test} from "@playwright/test"

test("fileuplpad",async ({page}) => {
    // const context=await browser.newContext()
    // const page=await context.newPage()


    await page.goto("https://www.nykaa.com/")

   // await page.getByRole('link',{name:"skin"}).hover()
   await page.waitForLoadState('networkidle');
   await page.locator("//a[@role='menuitem' and text()='skin']").hover()


    await page.waitForTimeout(1000)

  const [newpage] =  await Promise.all(
    [page.waitForEvent('popup'),
    page.getByRole('link',{name:"Face Oils"}).click()])
   
   let url= await newpage.url()
   console.log(url);

   await expect(newpage).toHaveURL(/face-oils/)

   //click on brand
 

   await page.waitForLoadState('networkidle');
   await newpage.locator("//div[@id='first-filter']//*[local-name()='svg']").click()
   await newpage.locator("//div[@class='control-value']/span[text()='Bio Oil']").check()

   await expect(newpage.locator("//span[text()='Bio Oil']/ancestor::label/descendant::div[contains(@class,'checkbox')]")).toBeChecked()



await newpage.locator("//span[text()='Price' and contains(@class,'title')]/parent::div//*[local-name()='svg']").click()

const price= newpage.locator("//input[@id='checkbox_Rs. 500 - Rs. 999_500-999']/parent::div/descendant::div[@class='control-indicator checkbox ']")
await price.check()
await expect(newpage.locator("//input[@id='checkbox_Rs. 500 - Rs. 999_500-999']/parent::div/descendant::div[contains(@class,'checkbox')]")).toBeChecked()

const product = newpage.locator("[class='css-xrzmfa']").first();
await expect(product).toBeVisible();

let [page3]=await Promise.all([
  newpage.waitForEvent('popup'),
  product.click()
])

await expect(page3).toHaveURL(/bio-oil/i)

console.log( await page3.locator("[class='css-umwkq7']").textContent())

//await page3.locator("//button[text()='Collect']").click()
const addtobag= page3.locator("//h1[contains(text(),'Bio-Oil')]/ancestor::div[@class='css-7r5xwt']/descendant::span[text()='Add to Bag']")
await expect(addtobag).toBeVisible()
await addtobag.click({force:true})

//click on cart button
await page3.locator("#header-bag-icon").click()

// await page3.locator("//p[text()='Coupons']/ancestor::div[@class='css-ekt05r']//*[local-name()='svg' and @class='css-1oql73n']").click()

//    await page3.locator("//div[@aria-label='back-button']//*[local-name()='svg']").click()
   
   const totalamt=await page3.locator("//div[@data-test-id='footer-grand-total']").textContent()
   console.log(totalamt);
   
    



    await page.waitForTimeout(2000)
    
})
