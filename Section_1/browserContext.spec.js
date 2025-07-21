const {chromium} =  require('playwright');

(async() => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page=await context.newPage();
    await page.goto('https://www.amazon.co.in');
    await page.screenshot({path:'JavaScript/tests/screenshots'+'contextSS.png',fullPage:true});
    await browser.close();
})(); 