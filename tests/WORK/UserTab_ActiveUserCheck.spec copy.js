const {test, expect} = require('@playwright/test');
const {POManager} = require('../../pageobjects/POManager');


test.beforeEach(async({page}) => {

        const username = "some"
        const password = "some"
        const poManager = new POManager(page)
        const loginPage = poManager.getLoginPage()
        await loginPage.goTo()
        await loginPage.insertCredentials(username,password)
})

//Below TC to verify an active user exists in the system and to verfiy its associated default UI elements
//checks under Braskem and user as abhineethva@gmail.com
//checks the selected user has got mail and rold associated
//checks the selected user has got at ;east one group associated 
test('TC103_Assert Active user', async ({page}) => {
        const poManager = new POManager(page)
        const adminLoginPage = poManager.getAdminPage()
        await adminLoginPage.selectDivision("BRASKEM")
        await adminLoginPage.getAdminUI()
        await adminLoginPage.verifyAdminLogin()
        await adminLoginPage.checkActiveUser()
        await adminLoginPage.checkGroup()
});

// //Below TC to verify emails cant be send to an active user
// test('TC104_Assert Sending Email to Active user', async ({page}) => {
//         const poManager = new POManager(page)
//         const adminLoginPage = poManager.getAdminPage()
//         await adminLoginPage.selectDivision("BRASKEM")
//         await adminLoginPage.getAdminUI()
//         await adminLoginPage.verifyAdminLogin()
//         await adminLoginPage.sendEmail()
// });



