import{test, expect} from '@playwright/test'
test('actions',async({page})=>{
    await page.goto("https://practice.expandtesting.com/login");
    await page.locator("//input[@name='username']").first().fill("Practice");
    await page.waitForTimeout(1000);
    await page.keyboard.press('ControlOrMeta+A')
    await page.keyboard.press('Backspace');
    await page.keyboard.type("practice");
    await page.locator("//input[@id='password']").first().click();
    await page.locator("//input[@id='password']").first().pressSequentially("SuperSecretPassword!");
    const submitButton= page.locator("//button[@type='submit']").first();
    await submitButton.hover();
    await page.waitForTimeout(1000);
    await page.mouse.down();
    await page.mouse.up(); 
    await page.waitForTimeout(1000);
    const flash=await page.locator("//div[@id='flash']/b").first().textContent();
    expect(flash).toContain("You logged into a secure area!");
})  