import {test, expect} from '@playwright/test';
test('Handling Waits',async({page})=>{
    await page.goto('https://omayo.blogspot.com/');
    const h1=page.locator('//h1[@class="title"]').first();
    await expect(h1).toHaveText("omayo (QAFox.com)");
    const dropdown=await page.locator('//button[text()="Dropdown"]').first();
    await dropdown.scrollIntoViewIfNeeded();
    await dropdown.waitFor({state:'visible'});
    await dropdown.click();
    await page.waitForSelector('//a[text()="Flipkart"]');

});
test.only("Handling waits",async({page})=>{
    await page.goto("https://pixabay.com/images/search/nature/");
    const img1=page.locator('//div[@class="container--MwyXl"]//a[@data-id="3617474"]').first();
    const img2=page.locator('//div[@class="container--MwyXl"]//a[@data-id="7967356"]').first();
    const max=10;
    for(let i=0; i<max; i++){
        const count1=await img1.count();
        if(count1>0){
            await img1.scrollIntoViewIfNeeded();
            await page.waitForTimeout(1000);
            await page.screenshot({path:'tests/screenshots/nature1.png'});
            const count2=await img2.count();
            if(count2>0){
            await img2.scrollIntoViewIfNeeded();
            await img2.screenshot({path:'tests/screenshots/nature2.png'});
            break;
            }
            return;
        }
        // else{
        //     await page.evaluate(()=>window.scrollBy(0,window.innerHeight));
        //     await page.waitForTimeout(1000);
        // }. 
    }
})

