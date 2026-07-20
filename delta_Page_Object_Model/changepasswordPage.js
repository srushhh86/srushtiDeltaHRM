class ChangePassword
{
    constructor(page)
    {
        this.page=page
        this.heading=page.getByRole("heading",{name:"Update Password"})
        this.currentPaawordTxtField=page.locator("//label[.='Current Password']/../..//input")
        this.paawordTxtField=page.locator("//label[.='Password']/../..//input")
        this.ConfirmPaawordTxtField=page.locator("//label[.='Confirm Password']/../..//input")
        this.saveBtn=page.getByRole("button",{name:" Save "})
        this.cancelBtn=page.getByRole("button",{name:"  Cancel  "})
        this.confirmationMsg=page.locator("//p[.='Successfully Saved']")

    }

    async changeOrUpdatePassword()
    {
        await this.currentPaawordTxtField.fill("admin123")
        await this.paawordTxtField.fill("Admin@123")
        await this.ConfirmPaawordTxtField.fill("Admin@123")
        await this.saveBtn.click()
        
    }
}
export default ChangePassword