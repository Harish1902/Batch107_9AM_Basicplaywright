import {test,expect,chromium} from '@playwright/test'

test("test case on place holder", async({page}) => {
  
   

   await page.goto("file:///C:/Users/Lenovo/Documents/playwright/PlayWright WebElements-20260518T134236Z-3-001/PlayWright WebElements/ByTestID.html");
  
   await page.waitForTimeout(3000);
   const Un = page.getByTestId("login-button");
   await Un.click();
   
    await page.waitForTimeout(3000);

})