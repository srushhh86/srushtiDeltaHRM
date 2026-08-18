
import {expect, test} from "@playwright/test"

test("fileuplpad",async ({page}) => {

     page.on("dialog", async (dialog) => {
        if(dialog.type()==='alert')
        {
            console.log(dialog.message());
            await dialog.accept()
            
        }
        else if(dialog.type()==='confirm')
        {
              await dialog.dismiss()
            console.log(dialog.message());
        }
        else if(dialog.type()==='prompt')
        {
            dialog.accept("hi srushti")
            console.log(dialog.message());
            
        }
        
    })
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")


  await page.getByRole('button',{name:"Click for JS Alert"}).click()

console.log(await page.locator("#result").textContent());

  await page.getByRole('button',{name:"Click for JS Confirm"}).click()
  console.log(await page.locator("#result").textContent());
    await page.getByRole('button',{name:"Click for JS Prompt"}).click()
    console.log(await page.locator("#result").textContent());

    await page.waitForTimeout(2000)
    
})


