import {test,expect,chromium} from '@playwright/test'

test("Opening Browser", async({page}) => {
  
   await page.setViewportSize({width:1680 , height:1050});

   await page.goto("https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e&adgrpid=155259813593&hvpone=&hvptwo=&hvadid=809000348074&hvpos=&hvnetw=g&hvrand=10577915786528831171&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9062140&hvtargid=kwd-64107830&hydadcr=14452_2459470&gad_source=1");
  
   await page.waitForTimeout(3000);


})