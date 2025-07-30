import {test,expect} from '@playwright/test';
test('Capturing Screenshots and Videos', async({browser})=>{

    const context=await browser.newContext({
        recordVideo:{dir:'tests/Section7/videos/', size:{width: 1280, height: 720}}
    });
    const page= await context.newPage();
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
    await page.locator("//body").click();
    await page.waitForTimeout(500);
    const skill=await page.locator('//select[@id="Skills"]');
    await skill.selectOption("Java");
    await page.waitForTimeout(500);
    await page.locator('//*[@role="combobox"]').click();
    await page.waitForTimeout(500);
    await page.locator("//li[text()='India']").waitFor({state:'visible'});
    await page.locator("//li[text()='India']").click();
    await page.waitForTimeout(500);
    const year=await page.locator('//select[@id="yearbox"]');
    await year.selectOption("1987");
    const month=await page.getByPlaceholder("Month");
    await month.selectOption("May");
    const day=await page.getByPlaceholder("Day");
    await day.selectOption("11");
    await page.waitForTimeout(500);
    await page.locator('//input[@id="firstpassword"]').first().fill("sudha@1234")
    await page.locator('//input[@id="secondpassword"]').first().fill("sudha@1234");
    await page.screenshot({path:'tests/Section7/screenshots/fullPage.png', fullPage: true});
    await page.locator('//button[@id="submitbtn"]').first().click();
    await page.waitForTimeout(500);
    await context.close();
    await browser.close(); 
})