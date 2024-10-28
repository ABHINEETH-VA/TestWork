const {LoginPage} = require('./LoginPage');
const {ShipmentsPage} = require('./ShipmentsPage')
//const {SettingsPage} = require("./SettingsPage")
const {SettingsPage} = require("./SettingsPage");
const {ContactPage} = require("./ContactPage");
const {ShipmentDetailsPage} = require("./ShipmentDetailsPage");
const {ActivityFeedPage} = require('./ActivityFeedPage');
const {ChatPage} = require("./ChatPage");
const {AdminLoginPage} = require("./AdminLoginPage");
class POManager
{
    constructor(page)
    {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.shipmentsPage = new ShipmentsPage(this.page)
        this.settingsPage = new SettingsPage(this.page)
        this.contactPage = new ContactPage(this.page)
        this.shipmentDetails = new ShipmentDetailsPage(this.page)
        this.activityFeedPage = new ActivityFeedPage(this.page)
        this.chatPage = new ChatPage(this.page)
        this.adminLoginPage = new AdminLoginPage(this.page)
    }

    getLoginPage() {
        return this.loginPage;
    }
    getShipmentsPage(){
        return this.shipmentsPage;
    }
    getSettingsPage(){
        return this.settingsPage;
    }
    getContactPage(){
        return this.contactPage;
    }
    getDetailsPage() {
        return this.shipmentDetails;
    }
    getActivityFeedPage(){
        return this.activityFeedPage;
    }
    getChatPage(){
        return this.chatPage;
    }
    getAdminPage(){
        return this.adminLoginPage;uujjkllllllllllkjjjjujjjiiii
        
    }

}
module.exports = {POManager};