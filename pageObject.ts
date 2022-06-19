import {By} from 'selenium-webdriver'
import {BasePage} from './basePage'
export class SoloPageObject extends BasePage {
    searchBar: By = By.xpath('//input[@data-qa-id="search_box_top-nav_input"]')
    
    //for non-logged in scenarios
    menuBtn: By = By.xpath('//a[@class="menu-button button-nav"]')
    birthdayMenuBtn: By = By.xpath('//*[@id="birthday_menu_trigger"]')
    birthdayForHerLink: By = By.xpath('(//*[@id="birthday_menu_items"])//*[@class="category-menu-li "][2]')

    //('(//*[@class="gallery-categories__label"])[7]')
    //sign in link on evite home page
    signInLink: By = By.xpath('//*[@data-qa-id="topnav_signin"]')
   
    //siign in input fields and buttons on main Login Page
    emailField1: By = By.xpath('//*[@id="id_email"]')
    passwordField1: By = By.xpath('//*[@id="id_password"]')
    signInBtn1: By = By.xpath('//*[@data-qa-id="signin-button"]')
    signOutBtn: By = By.css('["signout_button"]') //xpath('//*[@id="signout_button"]') //$x('//*[@data-qa-id="topnav_signout"]')
    
    //sign in input fields on secondary pages
    emailField2: By = By.xpath('//input[@id="login-email"]')
    passwordField2: By = By.xpath('//input[@id="login-password"]')
    signInBtn2: By = By.xpath('//button[@id="loginModal__submit"]')

    //add to my favorites
    heartBtn: By = By.xpath('(//i[@class="icon icon-heart"])[14]') //$x('(//i[@class="icon icon-heart"])[14]')
    
    createInvBtn: By = By.xpath('//*[@id="create_button"][1]') //$x('//*[@data-qa-id="create-event-cta"]')
    itemSelect: By = By.xpath('(//*[@class="row-item template"])[7]')
    eventTitle: By = By.css('[id="id_title"]')
    eventType: By = By.xpath('//*[@data-qa-id="id_event_type"]')
    eventDate: By = By.xpath('(//*[@data-qa-id="id_start-date"])[2]')
    eventTime: By = By.xpath('(//*[@data-qa-id="id_start-time"])')

    //preview or save draft
    previewBtn: By = By.xpath('//*[@data-qa-id="action_bar__preview_button"]') //By.id("button_preview")
    saveDraftBtn: By = By.xpath('//*[@data-qa-id="button-draft"]') //By.id("button_draft")
    backBtn: By = By.id("button_back")

    //profile
    profileBtn: By = By.xpath('//a[@href="https://www.evite.com/profile/edit"]') // By.xpath('(//*[@id="user_menu"])[1]') or By.xpath('(//*[@class="menu nav-link hidden"])//a[@href="https://www.evite.com/profile/edit"]')

    constructor() {
        super({url:"https://www.evite.com/"})
    }
    async search(searchTerm: string) {
        return this.setInput(this.searchBar, `${searchTerm}\n`)
    }
    async clickMenu(){
        return this.click(this.menuBtn)
    }
    async clickBirthdayMenu(){
        return this.click(this.birthdayMenuBtn)
    }

    async clickBirthdayForHerLink(){
        return this.click(this.birthdayForHerLink)
    }
    async clickHeartBtn(){
        return this.click(this.heartBtn)
    }
    async clickSignInLink() {
        return this.click(this.signInLink)
    }
    async mainloginEmail(searchTerm: string) {
        return this.setInput(this.emailField1, `${searchTerm}\n`)
    }

    async mainloginPassword(searchTerm: string) {
        return this.setInput(this.passwordField1, `${searchTerm}\n`)
    }
    
    async clickMainSignInBtn(){
        return this.click(this.signInBtn1)
    }
    async secloginEmail(searchTerm: string) {
        return this.setInput(this.emailField2, `${searchTerm}\n`)
    }

    async secloginPassword(searchTerm: string) {
        return this.setInput(this.passwordField2, `${searchTerm}\n`)
    }
    
    async clickSecSignInBtn(){
        return this.click(this.signInBtn2)
    }
    async clickSignOutBtn(){
        return this.click(this.signOutBtn)
    }
    async clickCreateInvBtn(){
        return this.click(this.createInvBtn)
    }
    async clickItemToSelect(){
        return this.click(this.itemSelect)
    }
    async eventTitleInput(searchTerm: string) {
        return this.setInput(this.eventTitle, `${searchTerm}\n`)
    }
    async eventTypeInput(searchTerm: string){
        return this.setInput(this.eventType, `${searchTerm}\n`)
    }
    async eventDateInput(dateInput: Date){
        return this.setInput(this.eventDate, `${dateInput}\n`)
    }
    async eventTimeInput(timeInput: Date){
        return this.setInput(this.eventDate, `${timeInput}\n`)
    }
    async clickPreviewInv(){
        return this.click(this.previewBtn)
    }
    async clickSaveDraft(){
        return this.click(this.saveDraftBtn)
    }
    async clickBackBtn(){
        return this.click(this.backBtn)
    }
   async clickProfile(){
        return this.click(this.profileBtn)
   }
}