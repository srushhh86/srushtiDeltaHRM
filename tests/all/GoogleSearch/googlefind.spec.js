
import {expect, test} from "@playwright/test"

test("flipkart",async ({page}) => {
    await page.goto("https://www.google.com/search?q=srushti&sca_esv=438a8a06e5127aad&sxsrf=APpeQntgglxlnjg6HAGZfiruu2hLe_rKPA%3A1782379286241&source=hp&ei=FvM8auvBC7azwcsPmqDTWA&iflsig=ABILxe8AAAAAaj0BJma-ieLu87SfQAgdN_LaiL5Cal3u&ved=0ahUKEwjrpNWhiKKVAxW2WXADHRrQFAsQ4dUDCDs&uact=5&oq=srushti&gs_lp=Egdnd3Mtd2l6IgdzcnVzaHRpMgQQIxgnMgoQABiABBiKBRhDMg0QLhgUGIcCGLEDGIAEMgoQLhiABBiKBRhDMgoQABiABBiKBRhDMgUQABiABDIKEAAYgAQYigUYQzIKEC4YgAQYigUYQzIOEC4YgAQYxwEYrwEYjgUyChAAGIAEGIoFGENI2Q9QAFiiDXAAeACQAQCYAboBoAGpCKoBAzEuN7gBA8gBAPgBAZgCCKACvQjCAgoQLhhDGIAEGIoFwgIIEC4YgAQYsQPCAgUQLhiABMICDRAuGEMYsQMYgAQYigXCAgsQLhiABBjHARivAZgDAJIHAzEuN6AH3HWyBwMxLje4B70IwgcFMC43LjHIBw2ACAE&sclient=gws-wiz#ebo=0")
//     await page.locator("[title='Search']").fill("srushti")
// await page.keyboard.press('Enter')
// await page.waitForTimeout(3000)
    const pageText = await page.locator('body').textContent();

const matches = pageText.match(/srushti/gi);

const count = matches ? matches.length : 0;

console.log(`Count: ${count}`);
  
await page.waitForTimeout(3000)

})