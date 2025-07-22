import {test, expect} from '@playwright/test'
test('product Title', async({page})=>{
    await page.goto("https://www.amazon.in");
    //page Title
    const title=await page.title();
    console.log("Page Title: "+title);
    //xpath
    await page.locator("//a[contains(text(),'Fashion')]").first().click();
    //CSS selector //Clicking on product img
    await page.locator('div.grid-container img[src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/BAU/Winterflip/Unrec/ClothingSBC/1._CB543856130_.png"]').click();
    //Getting product title
    const sarees=page.locator("//div[@class='a-section a-spacing-small puis-padding-left-micro puis-padding-right-micro']/div[@data-cy='title-recipe']");
    for(let i=0; i<5; i++){
        const text=await sarees.nth(i).textContent();
        console.log(`Product ${i+1}: ${text.trim()}`);
    }
    await page.getByText("Hand Wash Only").first().click();
    await page.getByRole('button',{name:'Add to cart'}).first().click();
    await page.screenshot({path:'screenshots/'+'page.png',fullPage:true})
    await page.waitForTimeout(5000);


})