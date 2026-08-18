import {test} from "@playwright/test"
test("verify color",async ({page}) => {
    await test.slow()

    await  page.goto("https://www.flipkart.com/search?q=bags+for+women&sid=reh%2Cihu&as=on&as-show=on&otracker=AS_QueryStore_HistoryAutoSuggest_1_3_na_na_na&otracker1=AS_QueryStore_HistoryAutoSuggest_1_3_na_na_na&as-pos=1&as-type=HISTORY&suggestionId=bags+for+women%7CHandbags+%26+Clutches&requestId=a1a4f282-85a4-4bc9-b731-d0225632934b")
    await page.waitForLoadState('load')
    const [page2]=await Promise.all([
        page.waitForEvent('popup'),
          page.locator('//a[@class="CIaYa1"]').first().click()
    ])
    await page2.locator('//div[@class="_1psv1zeb9 _1psv1ze0 _7dzyg22 _1psv1zeix"]').click()

    await page.bringToFront()
    await page.locator('//div[@class="_6odwB UHMz4K" and text()="Type"]').click()
  
})