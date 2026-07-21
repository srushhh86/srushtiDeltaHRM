 export class ActionUtils {
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

    static async removeClassFromElement(page, selector, className) {
        await page.locator(selector).evaluate((el, cls) => {
            el.classList.remove(cls);
        }, className);
    }

    static async dragAndDrop(page, sourceSelector, targetSelector) {
        await page.dragAndDrop(sourceSelector, targetSelector);
    }

    static async dragToCoordinate(page, selector, x, y) {
        const source = await page.locator(selector).boundingBox();
        await page.mouse.move(source.x + source.width / 2, source.y + source.height / 2);
        await page.mouse.down();
        await page.mouse.move(x, y);
        await page.mouse.up();
    }

    static async clickAtCoordinate(page, x, y) {
        await page.mouse.click(x, y);
    }

    static async mouseDown(page) {
        await page.mouse.down();
    }

    static async mouseUp(page) {
        await page.mouse.up();
    }

    static async moveMouse(page, x, y) {
        await page.mouse.move(x, y);
    }

    static async pressAndHold(page, key) {
        await page.keyboard.down(key);
    }

    static async release(page, key) {
        await page.keyboard.up(key);
    }

    static async execute(page, script, args = null) {
        return await page.evaluate(script, args);
    }

    static async clearAllCookies(page) {
        await page.context().clearCookies();
    }

    static async addCookie(page, name, value, options = {}) {
        await page.context().addCookies([{
            name,
            value,
            url: page.url(),
            ...options
        }]);
    }

    static async getCookie(page, name) {
        const cookies = await page.context().cookies();
        return cookies.find(c => c.name === name);
    }

    static async clearStorage(page) {
        await page.evaluate(() => {
            localStorage.clear();
            sessionStorage.clear();
        });
    }

    static async setLocalStorage(page, key, value) {
        await page.evaluate(({ key, value }) => {
            localStorage.setItem(key, value);
        }, { key, value });
    }

    static async getLocalStorage(page, key) {
        return await page.evaluate((key) => {
            return localStorage.getItem(key);
        }, key);
    }

    static async setSessionStorage(page, key, value) {
        await page.evaluate(({ key, value }) => {
            sessionStorage.setItem(key, value);
        }, { key, value });
    }

    static async getSessionStorage(page, key) {
        return await page.evaluate((key) => {
            return sessionStorage.getItem(key);
        }, key);
    }

    static async pressEnter(page) {
        await page.keyboard.press('Enter');
    }

    static async pressEscape(page) {
        await page.keyboard.press('Escape');
    }

    static async pressTab(page) {
        await page.keyboard.press('Tab');
    }

    static async pressBackspace(page) {
        await page.keyboard.press('Backspace');
    }

    static async pressDelete(page) {
        await page.keyboard.press('Delete');
    }

    static async selectAll(page) {
        await page.keyboard.press('Control+A');
    }

    static async copy(page) {
        await page.keyboard.press('Control+C');
    }

    static async paste(page) {
        await page.keyboard.press('Control+V');
    }

    static async undo(page) {
        await page.keyboard.press('Control+Z');
    }
}

