import{test,expect} from '@playwright/test'

test("slecting option in dropdown based on Text", async({page})=>{

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

     await page.waitForTimeout(5000)

     const f = page.frameLocator("//iframe[@name='rightMenu']");//Isentify the fraame


     await expect(f.locator("//select[@id='loc_code']")).toBeVisible(); // Identify element inside the frame

     const DD = await f.locator("//select[@id='loc_code']"); // dropdown locator

       await DD.selectOption("Emp. Middle Name");
    

    //await expect(page.locator("//select[@id='loc_code']")).toBeVisible();

     await page.waitForTimeout(3000)

     




})
