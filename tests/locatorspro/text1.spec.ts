import {test,expect,chromium} from '@playwright/test'

test("test case on place", async({page}) => {
  
   

   await page.goto("file:///C:/Users/Lenovo/Documents/playwright/PlayWright WebElements-20260518T134236Z-3-001/PlayWright WebElements/ByTextFileDuplicate.html");
   
   await page.waitForTimeout(3000);

   const S = page.getByText("Login").nth(0);
    await S.click();

   await page.waitForTimeout(2000);

   await page.goBack();

   const I = page.getByText("Login").nth(1);
    await I.click();
    await page.waitForTimeout(2000);

    await page.goBack();

    await page.waitForTimeout(2000);


    const H = page.getByText("Go to HDFC");
    await H.click();
    await page.waitForTimeout(2000);
    

})