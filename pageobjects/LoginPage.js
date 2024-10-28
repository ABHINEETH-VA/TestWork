const {expect} = require("@playwright/test");

class LoginPage {

    constructor(page)
    {
        this.page = page;
        //objects (elements)
        this.welcomeOrkestraPlatform = page.locator("h5[class$='welcome']")
        this.inputSignName = page.locator("#signInName")
        this.inputPassword = page.locator("#password")
        this.buttonNext = page.locator("#next")
        this.inactiveSignIn = page.locator("xpath=//div[@class='buttons']")
        this.linkForgotPassword = page.locator("#forgotPassword")
        this.linkSign = page.locator("div[class='signup-link'] a")
        this.questionsContact = page.locator("span[class$='having-problems']")
        this.divRememberMe = page.locator("div[class^='rememberMe']")
        this.linkPrivacyPolicy = page.locator("a[class$='text-right']")
        this.errorCredentials = page.getByText("We can't seem to find your account.")
        this.errorPassword = page.getByText("Your password is incorrect.")
        this.searchField = page.locator("xpath=//input[@type='text']")
        this.homepageLogo = page.locator("xpath=//p[text()=' Kia ora! Ready to find ']")

    }

    async goTo()
    {
        //await this.page.goto("https://oiapreprod.orkestrascs.com/");
        await this.page.goto("https://www.trademe.co.nz/a/");
    }

    async verifyPage()
    {
        await this.homepageLogo.toBeVisible()
    }

    async assertLoginPage(){
        await expect(this.welcomeOrkestraPlatform).toBeVisible()
        await expect(this.inputPassword).toBeVisible()
        await expect(this.inputSignName).toBeVisible()
        await expect(this.inactiveSignIn).toBeVisible()
        await expect(this.linkForgotPassword).toBeVisible()
        await expect(this.linkSign).toBeVisible()
        await expect(this.questionsContact).toBeVisible()
        await expect(this.divRememberMe).toBeVisible()
        await expect(this.linkPrivacyPolicy).toBeVisible()
    }
    
    async assertWrongCredentials(username,password){
        await expect(this.errorCredentials).toBeVisible()
    }
    
    async insertCredentials(username,password){
        await expect(this.welcomeOrkestraPlatform).toBeVisible({timeout: 1000*1000})
        await this.inputSignName.fill(username);
        await this.inputPassword.fill(password);
        await this.page.keyboard.press('Enter');
    }

    async assertWrongPassword(){
        await expect(this.errorPassword).toBeVisible()
    }

}
module.exports = {LoginPage};