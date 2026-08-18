export class Login{
      /**
       * @param {import('playwright').Page} page
       */
    constructor(page)
    {
        this.page=page;
        this.loginemail=page.locator("#email")
        this.loginpassword=page.locator("#password")
        this.loginbutton=page.locator('//input[@type="submit"]')
        this.registerlink=page.getByRole('link',{name:"Register your account"})
    }
    async logintoApplication(email,password)
    {
        await this.loginemail.fill(email)
        await this.loginpassword.fill(password)
        await this.loginbutton.click()
    }
}