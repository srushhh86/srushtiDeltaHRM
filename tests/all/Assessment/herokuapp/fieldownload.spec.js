import {test} from "@playwright/test"

test("fileuplpad",async ({page}) => {

    await page.goto("https://the-internet.herokuapp.com/download")


   let [downloaded]= await Promise.all([ page.waitForEvent('download'),
        page.getByRole('link',{name:"Assignment3_Lekshmi_loop.pdf"}).click()
    ])
   
let namefile=await downloaded.suggestedFilename()
    downloaded.saveAs(`/Users/srushtimarihal/Downloads/JSANDPW_PRACTICE/PW_practice/tests/Day1/${namefile}`)
    console.log(await downloaded.path());
    console.log(await downloaded.suggestedFilename());
    
    

    await page.waitForTimeout(2000)
    
})

