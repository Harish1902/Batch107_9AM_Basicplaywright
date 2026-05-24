import{test,expect} from '@playwright/test'

test("Absolute xpath", async({page})=>{

    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");

    await page.waitForTimeout(3000);

    const Un =  page.locator(" xpath = /html/body/form/table/tbody/tr/td[2]/table//tbody/tr/td[2]/table/tbody/tr[2]/td[2]/input");

    await Un.fill("selenium");

     await page.waitForTimeout(3000);

     const pwd = page.locator("xpath = /html/body/form/table/tbody/tr/td[2]/table/tbody/tr/td[2]/table/tbody/tr[3]/td[2]/input");

     await pwd.fill("cypress");

     await page.waitForTimeout(3000);

     const login = page.locator("xpath = /html/body/form/table/tbody/tr/td[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td[1]/input");

     await login.click();

     await page.waitForTimeout(3000);




})
