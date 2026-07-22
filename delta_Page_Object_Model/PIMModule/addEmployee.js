
export class AddEmployee {
    /**
       * @param {import('playwright').Page} page 
       */

    constructor(page) {
        this.page = page
        this.firstnameTextField = page.getByPlaceholder("First Name")
        this.middlenameTextField = page.getByPlaceholder("Middle Name")
        this.lastnameTextField = page.getByPlaceholder("Last Name")
        this.employeeIdTextField = page.locator("//label[text()='Employee Id']/ancestor::div[@class='oxd-grid-item oxd-grid-item--gutters']/descendant::input")
        this.createLoginToggle = page.locator('//span[@class="oxd-switch-input oxd-switch-input--active --label-right"]')
        this.usernameTextField = page.locator('//label[@class="oxd-label oxd-input-field-required" and text()="Username"]/ancestor::div[@class="oxd-grid-item oxd-grid-item--gutters"]/descendant::input')
        this.passwordTextField = page.locator('//label[@class="oxd-label oxd-input-field-required" and text()="Password"]/ancestor::div[@class="oxd-grid-item oxd-grid-item--gutters user-password-cell"]/descendant::input')
        this.saveEmployeeButton = page.getByRole('button', { name: "Save" })
        this.confirmPasswordTextField = page.locator('//label[@class="oxd-label oxd-input-field-required" and text()="Confirm Password"]/ancestor::div[@class="oxd-grid-item oxd-grid-item--gutters"]/descendant::input')
        this.succesfullToaster = page.locator('#oxd-toaster_1')
        this.uploadImageBtn = page.locator("//button[@class='oxd-icon-button oxd-icon-button--solid-main employee-image-action']")
        this.toasterMessage = page.locator('//p[@class="oxd-text oxd-text--p oxd-text--toast-message oxd-toast-content-text"]')

        this.NationalityDropdown = page.locator('//label[text()="Nationality"]/ancestor::div[@class="oxd-grid-item oxd-grid-item--gutters"]/descendant::div[text()="-- Select --"]')
        this.IndianDropDownOption = page.locator("//div/span[text()='Indian']")
        this.lastnameTextField = page.getByPlaceholder("Last Name")
        this.employeeIdTextField = page.locator("//label[text()='Employee Id']/ancestor::div[@class='oxd-grid-item oxd-grid-item--gutters']/descendant::input")
        this.createLoginToggle = page.locator('//span[@class="oxd-switch-input oxd-switch-input--active --label-right"]')
        this.usernameTextField = page.locator('//label[@class="oxd-label oxd-input-field-required" and text()="Username"]/ancestor::div[@class="oxd-grid-item oxd-grid-item--gutters"]/descendant::input')
        this.passwordTextField = page.locator('//label[@class="oxd-label oxd-input-field-required" and text()="Password"]/ancestor::div[@class="oxd-grid-item oxd-grid-item--gutters user-password-cell"]/descendant::input')
        this.saveEmployeeButton = page.getByRole('button', { name: "Save" })
        this.confirmPasswordTextField = page.locator('//label[@class="oxd-label oxd-input-field-required" and text()="Confirm Password"]/ancestor::div[@class="oxd-grid-item oxd-grid-item--gutters"]/descendant::input')
        this.succesfullToaster = page.locator('#oxd-toaster_1')
        this.uploadImageBtn = page.locator("//button[@class='oxd-icon-button oxd-icon-button--solid-main employee-image-action']")
        this.toasterMessage = page.locator('//p[@class="oxd-text oxd-text--p oxd-text--toast-message oxd-toast-content-text"]')



    }

    async createEmployee(firstname, lastname, employeeId, username, password) {
        await this.firstnameTextField.fill(firstname)
        await this.lastnameTextField.fill(lastname)
        await this.employeeIdTextField.fill(employeeId)
        await this.createLoginToggle.click()
        await this.usernameTextField.fill(username)
        await this.passwordTextField.fill(password)
        await this.confirmPasswordTextField.fill(password)
        await this.saveEmployeeButton.click()
        await this.page.waitForLoadState('networkidle')
    }
}