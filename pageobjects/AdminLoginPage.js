const {expect} = require("@playwright/test");

class AdminLoginPage {

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
        this.svgMenuIcon = page.locator("svg[data-testid='MenuIcon']")
        this.svgAdminIcon = page.locator("svg[data-testid='FolderSharedIcon']")

        //admin page locators
        this.userNameHeader = page.locator("xpath=//h5[text()='Users']")
        this.userNameCount = page.locator("xpath=//h5[text()='Users']/../h5[2]")
        this.searchField = page.locator("xpath=//input[@type='text']")
        this.inviteUserBtn = page.getByText("Invite new user")
        this.colHeadName = page.getByText("Name")
        this.colHeadRole = page.getByText("Role")
        this.colHeadEmail = page.getByText("Email")
        this.colHeadShipmentGroups = page.getByText("Shipment groups")
        this.colHeadStatus = page.getByText("Status")
        this.colHeadLastSignIn = page.getByText("Last sign-in")
        this.adminPageButton = page.locator("xpath=//a[@href='/admin']")
        this.adminPageHeader = page.locator("xpath=//h6[text()='Admin Management']")
        this.searchInput = page.locator("xpath=//input[@placeholder='Search']")
        this.activerUsrMail = page.locator("xpath=//td[contains(text(),'Abhineeth')]/..//td[text()='abhineethva@gmail.com']")
        this.activeUsrRole = page.locator("xpath=//td[contains(text(),'Abhineeth')]/..//td[text()='CUSTOMER']")
        this.activeUsrStatus = page.locator("xpath=//td[contains(text(),'Abhineeth')]/..//td[text()='ACTIVE']")
        this.activerUsrGrpCount = page.locator("xpath=//td[contains(text(),'Abhineeth')]/..//td[4]")
        this.inviteNewUsrBtn = page.locator("xpath=//button[text()='Invite new user']")
        this.inviteNewUsrBtnHdr = page.locator("xpath=//h6[text()='Invite new user']")
        this.emailInput = page.locator("xpath=//input[@id='invite-new-user-email']")
        this.errorMsg = page.locator("xpath=//p[contains(text(),'Error')]")
        this.divisionSelect = page.locator("xpath=//button[@id='basic-button']")
        this.divisionBraskem = page.locator("xpath=//p[text()='BRASKEM']")
        this.inviteBtn = page.locator("xpath=//button[text()='Invite']")
    }

    async goToOIA()
    {
        await this.page.goto("https://oiapreprod.orkestrascs.com/");
    }

    async assertValidAdminLogin(){
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
    async getAdminUI(){
        // await this.svgMenuIcon.click()
        // await this.svgAdminIcon.click()
        await this.adminPageButton.click()
    }

    async selectDivision(division){
        await this.divisionSelect.click()
        await this.divisionBraskem.click()
    }

    async sendEmail(){
        await expect(this.inviteNewUsrBtn).toBeEnabled()
        await (this.inviteNewUsrBtn).click()
        await expect(this.inviteNewUsrBtnHdr).toBeVisible()
        await this.emailInput.fill("abhineethva@gmail.com")
        await this.page.keyboard.press('Enter')
        await this.inviteBtn.click()
        await expect(this.errorMsg).toBeVisible()
    }

    async checkActiveUser(){
        await this.searchInput.fill("abhineethva@gmail.com")
        await this.page.keyboard.press('Enter')
        await expect(this.activeUsrRole).toBeVisible()
        await expect(this.activeUsrStatus).toBeVisible()
        await expect(this.activerUsrMail).toBeVisible()
    }

    async checkGroup(){
        await expect(this.activerUsrGrpCount).toBeVisible()
        const c = await this.activerUsrGrpCount.textContent()
        console.log("C -> " + c)
        const count = parseInt(c)
        console.log("Count" + count)
        expect(count).toBeGreaterThanOrEqual(1)

    }

    async verifyAdminLogin(){
        await expect(this.adminPageHeader).toBeVisible()
    }

    async checkDefaultUI_UserTab(){
        //await expect(this.userNameHeader).toHaveCount(1)
        await expect(this.userNameHeader).toBeVisible()
        await expect(this.userNameCount).toBeVisible()
        await expect(this.searchField).toBeVisible()
        await expect(this.inviteUserBtn).toBeEnabled()
        await expect(this.colHeadName).toBeVisible()
        await expect(this.colHeadRole).toBeVisible()
        await expect(this.colHeadEmail).toBeVisible()
        await expect(this.colHeadShipmentGroups).toBeVisible()
        await expect(this.colHeadStatus).toBeVisible()
        await expect(this.colHeadLastSignIn).toBeVisible()
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
module.exports = {AdminLoginPage};