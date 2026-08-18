export class Register {
    /**
      * @param {import('playwright').Page} page
      */
    constructor(page) {
        this.page = page

        this.firstNameTextfield = page.locator("#first_name")
        this.lastNameTextField = page.locator("#last_name")
        this.dateOfBirthTextField = page.locator("#dob")
        this.countryTextField = page.locator('#country')

        this.postalCodeTextfield = page.locator("#postal_code")
        this.houseNumberTextField = page.locator("#house_number")
        this.streetNumberTextField = page.locator("#street")
        this.cityTextField = page.locator('#city')

        this.stateTextfield = page.locator("#state")
        this.phoneNumberField = page.locator("#phone")
        this.emailField = page.locator("#email")
        this.passwordField = page.locator('#password')
        this.registerButton = page.getByRole('button', { name: "Register" })
    }

    async registrationForm(firstname, lastname, dob, contry, postalcode, houseno, streeno, city, state, phonenum, email, password) {


        await this.firstNameTextfield.fill(firstname)
        await this.lastNameTextField.fill(lastname)
        await this.dateOfBirthTextField.fill(dob)
        await this.countryTextField.selectOption({ label: `${contry}` })

        await this.postalCodeTextfield.fill(postalcode)
        await this.houseNumberTextField.fill(houseno)
        await this.streetNumberTextField.fill(streeno)
        await this.cityTextField.fill(city)

        await this.stateTextfield.fill(state)
        await this.phoneNumberField.fill(phonenum)
        await this.emailField.fill(email)
        await this.passwordField.fill(password)
        await this.registerButton.click()
    }

}