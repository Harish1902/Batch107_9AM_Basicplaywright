import{test,expect} from '@playwright/test'

test("Relativee xpath", async({page})=>{

    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");

    await page.waitForTimeout(3000);

    const Un =  page.locator("//input[@type='text']");
    await Un.fill("selenium");

     await page.waitForTimeout(3000);

     const pwd = page.locator("//input[@name='txtPassword']");

     await pwd.fill("selenium");

     await page.waitForTimeout(3000);

     const login = page.locator("//input[@value='Login']");

     await login.click();

     await page.waitForTimeout(3000);

     console.log("test case related to relative xpath executed successfully");




})
