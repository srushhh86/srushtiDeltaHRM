export class HomePage {
    /**
    * @param {import('playwright').Page} page
    */
    constructor(page) {
        this.page = page
        this.homelink = page.getByRole("link", { name: "Home" })
        this.secondpage = page.locator("//a[@role='button' and text()='2']")
        this.searchTextField = page.locator('#search-query')
        this.searchButton = page.locator('//button[contains(text(),"Search")]')
        this.hammerCheckBox = page.locator('//label[contains(text(),"Hammer")]/input')
        this.minSlider = page.locator('//span[contains(@class,"slider-pointer-min")]')
        this.maxSlider = page.locator('//span[contains(@class,"slider-pointer-max")]')
        this.productDisplayed=page.locator('//a[@class="card"]')
        this.menuButton=page.locator('//button[@id="menu"]')
        this.navigationCart=page.locator('//a[@data-test="nav-cart"]')
    }

    async leftSlider(x) {
        await this.minSlider.waitFor({ state: "visible" });
        await this.minSlider.scrollIntoViewIfNeeded();
        await this.page.waitForLoadState("networkidle");
        let box = await this.minSlider.boundingBox()
        await this.page.mouse.move(box.x + box.width / 2, box.y + box.height / 2)
        await this.page.mouse.down()
        //  await this.page.waitForTimeout(200);
        await this.page.mouse.move(box.x + box.width / 2 + x, box.y + box.height / 2, { steps: 30 })
        // await this.page.waitForTimeout(200);
        await this.page.mouse.up()
    }

    async rightSlider(x) {
           await this.maxSlider.waitFor({ state: "visible" });
        await this.maxSlider.scrollIntoViewIfNeeded();
        await this.page.waitForLoadState("networkidle");
        let box = await this.maxSlider.boundingBox()
        await this.page.mouse.move(box.x + box.width / 2, box.y + box.height / 2)
        await this.page.mouse.down()
    // await this.page.waitForTimeout(200);
        await this.page.mouse.move(box.x + box.width / 2 + x, box.y + box.height / 2, { steps: 30 })
        // await this.page.waitForTimeout(200);
        await this.page.mouse.up()
    }

    async searchElement(element) {
        await this.searchTextField.fill(element)
        await this.searchButton.click()
    }
}