import{test,expect} from '@playwright/test'

test("Test case with OR ", async({page})=>{

    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");

    await page.waitForTimeout(3000);

    const Un =  page.locator("//input[@class='hello' or @tabindex='1']");
    await Un.fill("selenium");

     await page.waitForTimeout(3000);

     const pwd = page.locator("//input[@class='hari' or @tabindex='2']");

     await pwd.fill("selenium");

     await page.waitForTimeout(3000);

     const login = page.locator("//input[starts-with(@value,'Login')]");

     await login.click();

     await page.waitForTimeout(3000);




})
