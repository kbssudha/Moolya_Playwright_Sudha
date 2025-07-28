const {test, expect} = require('@playwright/test');
const testData=JSON.parse(JSON.stringify(require("../tests/testData.json")));

test.describe("Data Driven Login Test", function()
{
for(const data of testData)
{
    test.describe(`Login with users ${data.id}`,function()
{
//     test('Login with Application', async({page})=>{
//         await page.goto("https://freelance-learn-automation.vercel.app/login");
//         await page.locator("//input[@id='email1']").fill(data.username);
//         await page.locator("//input[@id='password1']").fill(data.password);
//         await page.pause();
//     })

    test('Login with Application', async({page})=>{
        await page.goto("https://freelance-learn-automation.vercel.app/login");
        await page.locator('//a[@class="subLink"]').first().click();
        await page.locator('//input[@id="name"]').first().fill(data.name);
        await page.locator("//input[@id='email']").fill(data.username);
        await page.locator("//input[@id='password']").fill(data.password);
        await page.locator("(//input[@type='checkbox'])[6]").check();
        await page.locator("(//input[@type='radio'])[2]").click();
        await page.locator("//select[@id='state']").selectOption('Tamil Nadu');
        await page.locator("//select[@id='hobbies']").selectOption('Dancing');
        await page.waitForTimeout(2000);
        await page.locator('//button[@type="submit"]').click();
});
});
}
});