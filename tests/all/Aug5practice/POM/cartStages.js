export class CartStages {
    /**
     * @param {import('playwright').Page} page
     */
    constructor(page) {
        this.page = page;
        this.productTitle = page.locator("//span[@class='product-title']")
        this.quantityOfProduct = page.locator("//input[contains(@class,'form-control quantity')]")
        this.priceOfProduct = page.locator('//span[@data-test="product-price"]')
        this.totalprice = page.locator('//span[@data-test="line-price"]')
        this.checkOutButton = page.getByRole('button', { name: "Proceed to checkout" })
        this.alreadySignedIn = page.locator('//p[@class="ng-star-inserted"]')

        this.conuntry = page.locator("#country")
        this.postalCode = page.locator("#postal_code")
        this.houseNumber = page.locator('#house_number')
        this.street = page.locator('#street')
        this.city = page.locator("#city")
        this.state = page.locator("#state")
        this.proceedToCheckoutButton = page.getByRole('button',{name:"Proceed to checkout"})
        
        this.paymentMethod = page.locator('#payment-method')
        this.confirmButton=page.getByRole('button',{name:"Confirm"})
        this.successMessage=page.locator('//div[@class="help-block"]')

    }
    async fillShippingDetails(contry, postalcode, houseno, streetno, city, state) {
        await this.conuntry.selectOption({label: contry})
        await this.postalCode.fill(postalcode)
        await this.houseNumber.fill(houseno)
        await this.street.fill(streetno)
        await this.city.fill(city)
        await this.state.fill(state)
        this.proceedToCheckoutButton.click()
    }

    async selectPaymentMethod(paymentMethod){
        await this.paymentMethod.selectOption({label:paymentMethod})
        await this.confirmButton.click()
    }

}