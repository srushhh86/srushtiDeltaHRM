import{test,expect}from"../../Fixtures/baseFixture.js"

test("login by using fixture",async({loginPage})=>
{
   let page = loginPage
    await expect(page.locator("//h6[.='Dashboard']")).toHaveText("Dashboard",{ timeout: 10000 })

})