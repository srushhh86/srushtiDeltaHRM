export class ActionUtils {
   

    

    static async uploadUsingFileChooser(page, locator, filePath) {

        const fileChooserPromise = page.waitForEvent('filechooser');

        await locator.click();

        const fileChooser = await fileChooserPromise;

        await fileChooser.setFiles(filePath);
    }


    static async uploadFile(locator, filePath) {
        await locator.setInputFiles(filePath);
    }


     static async click(page, selector) {
        await page.click(selector);
    }

    static async doubleClick(page, selector) {
        await page.dblclick(selector);
    }
  
    static async rightClick(page, selector) {
        await page.click(selector, { button: 'right' });
    }

    static async fill(page, selector, text) {
        await page.fill(selector, text);
    }

    static async type(page, selector, text, delay = 50) {
        await page.type(selector, text, { delay });
    }

    static async clear(page, selector) {
        await page.fill(selector, '');
    }

    static async selectOption(page, selector, value) {
        await page.selectOption(selector, value);
    }

    static async selectMultiple(page, selector, values) {
        await page.selectOption(selector, values);
    }

    static async hover(page, selector) {
        await page.hover(selector);
    }

    static async focus(page, selector) {
        await page.focus(selector);
    }

    static async blur(page, selector) {
        await page.evaluate((sel) => {
            document.querySelector(sel).blur();
        }, selector);
    }

    static async press(page, key) {
        await page.keyboard.press(key);
    }

    static async typeKeys(page, keys) {
        for (const key of keys) {
            await page.keyboard.press(key);
        }
    }

    static async scrollToElement(page, selector) {
        await page.locator(selector).scrollIntoViewIfNeeded();
    }

    static async scrollToTop(page) {
        
        await page.evaluate(() => window.scrollTo(0, 0));
    }

    static async scrollToBottom(page) {
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    }

    static async scrollBy(page, x, y) {
        await page.evaluate(({ x, y }) => window.scrollBy(x, y), { x, y });
    }

    static async uploadFile(page, selector, filePath) {
        await page.locator(selector).setInputFiles(filePath);
    }

    static async uploadMultipleFiles(page, selector, filePaths) {
        await page.locator(selector).setInputFiles(filePaths);
    }

    static async switchToFrame(page, frameSelector) {
        return await page.frameLocator(frameSelector);
    }

    static async navigateTo(page, url) {
        await page.goto(url);
    }

    static async goBack(page) {
        await page.goBack();
    }

    static async goForward(page) {
        await page.goForward();
    }

    static async reload(page) {
        await page.reload();
    }

    static async checkCheckbox(page, selector) {
        await page.check(selector);
    }

    static async unCheckCheckbox(page, selector) {
        await page.uncheck(selector);
    }

    static async toggleCheckbox(page, selector) {
        const isChecked = await page.isChecked(selector);
        if (isChecked) {
            await page.uncheck(selector);
        } else {
            await page.check(selector);
        }
    }

    static async setAttribute(page, selector, attribute, value) {
        await page.locator(selector).evaluate((el, { attr, val }) => {
            el.setAttribute(attr, val);
        }, { attr: attribute, val: value });
    }

    static async removeAttribute(page, selector, attribute) {
        await page.locator(selector).evaluate((el, attr) => {
            el.removeAttribute(attr);
        }, attribute);
    }

    static async addClassToElement(page, selector, className) {
        await page.locator(selector).evaluate((el, cls) => {
            el.classList.add(cls);
        }, className);
    }

}

