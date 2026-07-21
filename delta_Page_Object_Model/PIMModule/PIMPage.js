
export class PIMPage {
    /**
       * @param {import('playwright').Page} page 
       */

    constructor(page) {
        this.page = page
        this.employeeListLink = page.getByRole('link', { name: "Employee List" })
        this.addEmployeeLink = page.getByRole('link', { name: "Add Employee" })
        this.reportLink = page.getByRole('link', { name: "Reports" })
        this.employeeNameTextField = page.getByRole('textbox', { name: 'Employee Name' })
        this.employeeIdTextField = page.getByRole('textbox', { name: 'Employee Id' })
        this.employeeStatusDropDown = page.locator('//label[text()="Employment Status"]/ancestor::div[@class="oxd-grid-item oxd-grid-item--gutters"]/descendant::div[@class="oxd-select-text-input"]')
        this.includeDropDown = page.locator('//label[text()="Include"]/ancestor::div[@class="oxd-grid-item oxd-grid-item--gutters"]/descendant::div[@class="oxd-select-text-input"]')
        this.jobTitleDropDown = page.locator('//label[text()="Job Title"]/ancestor::div[@class="oxd-grid-item oxd-grid-item--gutters"]/descendant::div[@class="oxd-select-text-input"]')
        this.subUnitDropDown = page.locator('//label[text()="Sub Unit"]/ancestor::div[@class="oxd-grid-item oxd-grid-item--gutters"]/descendant::div[@class="oxd-select-text-input"]')
        this.supervisorNameTextField = page.getByRole('textbox', { name: 'Supervisor Name' })
        this.searchButton = page.getByRole('button', { name: 'Search' })
        this.resetButton = page.getByRole('button', { name: 'Reset' })
    }
}