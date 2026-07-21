

class Login
{
    constructor(page)
    {
        this.page=page
        this.userNameTxt=page.getByPlaceholder("Username")
        this.passwordTxt=page.getByPlaceholder("Password")
        this.submitBtn=page.locator("//button[@type='submit']")
    }
    async loginToApplication(url = process.env.URL, username = process.env.User_Name, password = process.env.Password)
    {
        await this.page.goto(url)
        await this.userNameTxt.fill(username)
        await this.passwordTxt.fill(password)
        await this.submitBtn.click()
        await this.page.waitForLoadState('load')
    }
}
export default Login