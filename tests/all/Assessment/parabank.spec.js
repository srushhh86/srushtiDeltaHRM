
import { expect, test } from "@playwright/test"

test.describe("parabank", () => {

    test("parabank", async ({ page }) => {

        await test.setTimeout(20000)
        await page.goto("https://parabank.parasoft.com/")


        await page.getByRole('link', { name: "Register" }).click()

        // //register
        let randomNum = Math.floor(Math.random() * 1001);
        let username = "srushti" + randomNum
        let password = "srushti615$"
        await page.locator("//input[@id='customer.firstName']").fill(username)
        await page.waitForTimeout(1000)
        await page.locator("//input[@id='customer.lastName']").fill("m")
        await page.locator("//input[@id='customer.address.street']").fill("htype")
        await page.locator("//input[@id='customer.address.city']").fill("bangalore")
        await page.locator("//input[@id='customer.address.state']").fill("karnataka")
        await page.locator("//input[@id='customer.address.zipCode']").fill("5600001")
        await page.locator("//input[@id='customer.phoneNumber']").fill("8733847839")
        await page.locator("//input[@id='customer.ssn']").fill("86")
        await page.locator("//input[@id='customer.username']").fill(username)
        await page.locator("//input[@id='customer.password']").fill(password)
        await page.locator("//input[@id='repeatedPassword']").fill(password)
        await page.getByRole('button', { name: "Register" }).click()
        await expect(page).toHaveURL("https://parabank.parasoft.com/parabank/register.htm")

        //login

        // await page.locator("//input[@name='username']").fill("srushti91")
        // await page.locator('//input[@name="password"]').fill("srushti615$")
        // await page.getByRole('button',"Log In").click()


        //open account
        await page.getByRole('link', { name: "Open New Account" }).click()
        await page.locator("//select[@id='type']").selectOption({ label: "SAVINGS" })
        await page.waitForLoadState('networkidle')
        let acctnum = await page.locator("//select[@id='fromAccountId']").textContent()
        console.log("acctnum " + acctnum);
        await page.waitForLoadState('networkidle')
        await page.locator("//input[@class='button']").click()

        const accountIdLocator = page.locator("//a[@id='newAccountId']");

        await accountIdLocator.waitFor({ state: 'visible' });

        const acctID = await accountIdLocator.textContent();

        console.log("acctID " + acctID)


        //acct overview
        await page.getByRole('link', { name: "Accounts Overview" }).click()
        await page.waitForLoadState('domcontentloaded')

        await page.locator("//table[@id='accountTable']/descendant::tr/td/a").first().waitFor({ state: "visible" })

        let acctnumList = await page.locator("//table[@id='accountTable']/descendant::tr/td/a").allInnerTexts()
        console.log("num of acct" + acctnumList);

        let AcctNum1 = acctnumList[0]
        console.log("acc num 1 " + AcctNum1);
        let VerifyAmt1 = await page.locator("//a[text()='" + AcctNum1 + "']/parent::td/following-sibling::td")
        let balance1 = await VerifyAmt1.first().textContent()
        let availableAmt1 = await VerifyAmt1.nth(0).textContent()

        console.log("balance of " + AcctNum1 + " before transfer " + balance1);
        console.log("availableAmt before transfer for " + AcctNum1 + " is" + availableAmt1);

        let AcctNum2 = acctnumList[1]
        console.log("acc num 2 " + AcctNum2);

        let VerifyAmt2 = await page.locator("//a[text()='" + AcctNum2 + "']/parent::td/following-sibling::td")
        let balance2 = await VerifyAmt2.first().textContent()
        let availableAmt2 = await VerifyAmt2.nth(0).textContent()

        console.log("balance of " + AcctNum2 + " before transfer " + balance2);
        console.log("availableAmt before transfer for " + AcctNum2 + " is" + availableAmt2);



        //fund transfer

        await page.getByRole('link', { name: "Transfer Funds" }).click()

        let amt = "100"
        await page.locator("//input[@id='amount']").fill(amt)

        await page.waitForLoadState('domcontentloaded')


        await page.locator('//select[@id="fromAccountId"]').selectOption(AcctNum1)


        await page.locator('//select[@id="fromAccountId"]').selectOption(AcctNum2)
        await page.locator("//input[@value='Transfer']").click()

        await page.waitForTimeout(1000)

        //acct overview. // validating
        await page.waitForTimeout(1000)


        await page.getByRole('link', { name: "Accounts Overview" }).click()
        await page.waitForLoadState('domcontentloaded')

        await page.locator("//table[@id='accountTable']/descendant::tr/td/a").first().waitFor({ state: "visible" })

        let acctnumListSecondtime = await page.locator("//table[@id='accountTable']/descendant::tr/td/a").allInnerTexts()
        console.log("num of acct" + acctnumListSecondtime);

        let AcctNum1SecTime = acctnumList[0]
        console.log("acc num 1 " + AcctNum1SecTime);
        let VerifyAmtSecTime1 = await page.locator("//a[text()='" + AcctNum1SecTime + "']/parent::td/following-sibling::td")
        let balance1ST = await VerifyAmtSecTime1.first().textContent()
        let availableAmt1ST = await VerifyAmtSecTime1.nth(0).textContent()

        console.log("balance of " + AcctNum1 + " before transfer " + balance1ST);
        console.log("availableAmt before transfer for " + AcctNum1 + " is" + availableAmt1ST);

        let AcctNum2ST = acctnumList[1]
        console.log("acc num 2 " + AcctNum2ST);

        let VerifyAmt2ST = await page.locator("//a[text()='" + AcctNum2ST + "']/parent::td/following-sibling::td")
        let balance2ST = await VerifyAmt2ST.first().textContent()
        let availableAmt2ST = await VerifyAmt2ST.nth(0).textContent()

        console.log("balance of " + AcctNum2 + " before transfer " + balance2ST);
        console.log("availableAmt before transfer for " + AcctNum2 + " is" + availableAmt2ST);

        ///verify amount

        balance1 = Number(balance1.replace("$", ""))
        balance2 = Number(balance2.replace("$", ""))
        balance1ST = Number(balance1ST.replace("$", ""))
        balance2ST = Number(balance2ST.replace("$", ""))
        let diffBetweenfirst = balance1ST - balance1
        let diffbetweenSecond = balance2 - balance2ST

        console.log(diffBetweenfirst);

        console.log(diffbetweenSecond);

        await expect(diffBetweenfirst).toBe(diffbetweenSecond)

        let verifyRemainign = balance1ST - balance1
         amt=Number(amt)
        await expect(verifyRemainign).toBe(amt)



        await page.waitForTimeout(1000)




    })






})