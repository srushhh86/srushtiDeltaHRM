import{test as base,expect}from"@playwright/test"
// import Login from "../delta_Page_Object_Model/loginPage.js"
export const test=base.extend({
    loginPage:async({page},use)=>
    {
        
        await page.goto(process.env.URL)
    
        await use(page)
        

    }
})
export{expect}