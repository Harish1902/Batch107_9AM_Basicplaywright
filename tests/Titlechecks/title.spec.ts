import{test,expect} from '@playwright/test'

test("starts with ", async({page})=>{

    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");

    await page.waitForTimeout(3000);

    //const htitle = await page.title();

    await expect(page).toHaveTitle("OrangeHRM - New Level of HR Management");

    //console.log("The home page Title is :" + htitle);

    const Un =  page.locator("//input[starts-with(@type,'te')]");
    await Un.fill("selenium");

     await page.waitForTimeout(3000);

     const pwd = page.locator("//input[starts-with(@type,'pass')]");

     await pwd.fill("selenium");

     await page.waitForTimeout(3000);

     const login = page.locator("//input[starts-with(@value,'Login')]");

     await login.click();


     await page.waitForTimeout(5000);

     const Atitle = await  page.title();
    console.log("The After login page Title is :" + Atitle);





})
