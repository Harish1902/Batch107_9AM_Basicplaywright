import {test,expect,chromium} from '@playwright/test'

test("test case on place holder", async({page}) => {
  
   

   await page.goto("file:///C:/Users/Lenovo/Documents/playwright/PlayWright WebElements-20260518T134236Z-3-001/PlayWright WebElements/PlaceHolderPro.html");
  
   await page.waitForTimeout(3000);
   const Un = page.getByPlaceholder("Username");
   await Un.fill("Hi Good Morning");
   
    await page.waitForTimeout(1000);
    const Pwd = page.getByPlaceholder("Password");
   await Pwd.fill("Hi My password");
    

    await page.waitForTimeout(1000);
    const Email = page.getByPlaceholder("Email address");
   await Email.fill("Hi My Email id is");
    
    await page.waitForTimeout(1000);
   const Comments = page.getByPlaceholder("Enter your comments");
   await Comments.fill("Hi My Email id is");

    await page.waitForTimeout(3000);

})
