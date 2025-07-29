import {test,expect} from '@playwright/test';
test('Capturing Screenshots and Videos', async({page})=>{
    await page.goto("https://demo.automationtesting.in/Register.html");
    await page.getByPlaceholder("First Name").fill("Sudha");
    await page.getByPlaceholder("Last Name").fill("K");
    await page.locator('//div[@class="col-md-8 col-xs-8 col-sm-8"]/textarea').pressSequentially("Flat no: 2021, TATA New Haven, Bangalore North");
    await page.locator('//input[@type="email"]').fill("sudha123@gmail.com");
    await page.locator('//input[@type="tel"]').fill("7434255342");
    await page.locator('//input[@type="radio" and @value="FeMale"]').click();
    await page.locator('//input[@id="checkbox2"]').check();
    await page.locator('//div[@class="col-md-4 col-xs-4 col-sm-4"]/multi-select').click();
    await page.locator('//div[@id="msdd"]').click();
    await page.locator('text=English').click();
    await page.waitForTimeout(2000);
})