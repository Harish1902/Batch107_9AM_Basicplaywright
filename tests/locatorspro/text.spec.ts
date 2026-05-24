import {test,expect,chromium} from '@playwright/test'

test("test case on place", async({page}) => {
  
   

   await page.goto("file:///C:/Users/Lenovo/Documents/playwright/PlayWright WebElements-20260518T134236Z-3-001/PlayWright WebElements/ByTextFile.html");
   
   await page.waitForTimeout(3000);

   const G = page.getByText("MyGoogle");
    await G.click();

   await page.waitForTimeout(2000);

   await page.goBack();

   const M = page.getByText("Go to TheMask");
    await M.click();
    await page.waitForTimeout(2000);

    await page.goBack();

    await page.waitForTimeout(2000);

    await page.goForward();
    await page.waitForTimeout(2000);
    

})