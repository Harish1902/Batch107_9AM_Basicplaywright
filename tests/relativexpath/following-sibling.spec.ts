import{test,expect} from '@playwright/test'

test("starts with ", async({page})=>{

    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");

    await page.waitForTimeout(3000);

    const Un =  page.locator("//table[@cellpadding='3']//following-sibling::input");
    await Un.fill("selenium");

     await page.waitForTimeout(3000);

     const pwd = page.locator("//table[@cellpadding='3']//following-sibling::input//following::input[1]");

     await pwd.fill("selenium");

     await page.waitForTimeout(3000);

     const login = page.locator("//table[@cellpadding='3']//following-sibling::input//following::input[2]");

     await login.click();

     await page.waitForTimeout(3000);




})
