import { expect, test } from "@playwright/test"
import registrationData from "./TestData/registrationdata.json"
import loginData from "./TestData/logindata.json"
import { HomePage } from "./POM/home.js";
import { Register } from "./POM/registration.js";
import { Login } from "./POM/Login.js";
import { ProductDetails } from "./POM/productDetails.js"
import fs from "fs"
import { CartStages } from "./POM/cartStages.js";


test("test case", async ({ browser }) => {
    await test.setTimeout(50000)

    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://practicesoftwaretesting.com/auth/login");
    const login = new Login(page)
    const register = new Register(page)
    const homepage = new HomePage(page)
    const productDetails = new ProductDetails(page)
    const cartstages = new CartStages(page)

    //click on register
    login.registerlink.click()

    //now register

    const email = registrationData.firstname + Date.now() + "@gmail.com"
    await register.registrationForm(registrationData.firstname, registrationData.lastname, registrationData.dob, registrationData.contry, registrationData.postalcode, registrationData.houseno, registrationData.streeno, registrationData.city, registrationData.state, registrationData.phonenum, email, registrationData.password)




    await page.goto("https://practicesoftwaretesting.com/auth/login");

    await login.logintoApplication(loginData.email, loginData.password)

    await expect(page).toHaveURL(/account/)
    await page.waitForLoadState('load')

    await homepage.homelink.click()
    await homepage.secondpage.click()
    await homepage.searchElement("hammer")
    await homepage.hammerCheckBox.click()
    await homepage.leftSlider(20)
    await homepage.rightSlider(-10)

    console.log(await page.locator('//span[@class="ngx-slider-span ngx-slider-bubble ngx-slider-model-high"]').textContent())
    await homepage.minSlider.scrollIntoViewIfNeeded()

    await homepage.productDisplayed.first().click()
    await expect(page).toHaveURL(/product/)



    await productDetails.addToCart.click()
    await page.locator('//div[contains(@aria-label,"Product added to shopping cart")]').waitFor({ state: "visible" })
    await expect(page.locator('//div[contains(@aria-label,"Product added to shopping cart")]')).toHaveText('Product added to shopping cart.')

    await homepage.navigationCart.click();
    await expect(page).toHaveURL(/checkout/)

    console.log(await cartstages.productTitle.textContent())
    console.log(await cartstages.quantityOfProduct.textContent())
    console.log(await cartstages.priceOfProduct.textContent())
    console.log(await cartstages.totalprice.textContent())
    await cartstages.checkOutButton.click()

    await expect(cartstages.alreadySignedIn).toContainText('already logged in')
    await cartstages.checkOutButton.click()

    await cartstages.fillShippingDetails(registrationData.contry, registrationData.postalcode, registrationData.houseno, registrationData.streeno, registrationData.city, registrationData.state)

    await cartstages.selectPaymentMethod("Cash on Delivery")
    await expect(cartstages.successMessage).toContainText('Payment was successful')
    await page.screenshot({ path: "/Users/srushtimarihal/Downloads/JSANDPW_PRACTICE/PW_practice/tests/Aug5practice/photo.png" })

    await page.waitForTimeout(3000)

})

