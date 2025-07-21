import {test, expect} from '@playwright/test';

test('page screenshot', async({page})=>{
    await page.goto('https://www.google.com/')
    await page.screenshot({path:'tests/screenshots/'+ Date.now() +'HomePage.png'})
});

test('Full page screenchot', async({page})=>{
   await page.goto('https://www.flipkart.com/')
   await page.screenshot({path:'tests/screenshots/'+ Date.now() +'FullPage.png', fullPage:true})
});

test.only('Element screenchot', async({page})=>{
    await page.goto('https://www.flipkart.com/')
    await page.locator("(//div[@class='YBLJE4'])[2]").screenshot({path:'tests/screenshots/'+ Date.now() +'Mobile.png'})
});

