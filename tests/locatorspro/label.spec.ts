import {test,expect,chromium} from '@playwright/test'

test("test case on place", async({page}) => {
  
   

   await page.goto("file:///C:/Users/Lenovo/Documents/playwright/PlayWright WebElements-20260518T134236Z-3-001/PlayWright WebElements/ByLabel.html");
   
   await page.waitForTimeout(3000);

   const Un = page.getByLabel("Username");
    await Un.fill("devi is still sleeping");

   await page.waitForTimeout(3000);


})