import{test,expect} from '@playwright/test';
test.describe('Login Page Test', ()=>{
    test.beforeAll(async()=>{
         // This hook runs once before all tests in this describe block
        console.log("Global setup: Preparing for login tests")
    });
    test.beforeEach(async({page})=>{
        // This hook runs before each test in this describe block
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        console.log("Navigated to login page")
    });
    test("Login with username and password fiels",async({page})=>{
        const form= page.locator("//div[@class='orangehrm-login-form']").first();
        await expect(form).toBeVisible();
        const username = await form.getByPlaceholder("Username");
        await expect(username).toBeVisible();
        const password = await form.getByPlaceholder("Password");
        await expect(password).toBeVisible();
    });
    test('Login with invalid credential',async({page})=>{
        await page.fill("//input[@name='username']","Sudha");
        await page.fill("//input[@name='password']","kbssundari");
        await page.click("//button[@type='submit']");
        // await page.waitForNavigation();
        const errorMsg=page.locator("text=Invalid credentials")
        await expect(errorMsg).toBeVisible();
    });
    test('Login with valid credential',async({page})=>{
        await page.fill("//input[@name='username']","Admin");
        await page.fill("//input[@name='password']","admin123");
        await page.click("//button[@type='submit']");
        await page.waitForNavigation();
        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

    });
    
    test.afterEach(async () => {
    // This hook runs after each test in this describe block
    console.log('Test completed');
     });

    test.afterAll(async () => {
    // This hook runs once after all tests in this describe block
    console.log('All login tests completed');
    });
});