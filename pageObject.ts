import {By} from 'selenium-webdriver'
import {BasePage} from './basePage'
export class SoloPageObject extends BasePage {
    //Search
    searchBar: By = By.xpath('//input[@data-qa-id="search_box_top-nav_input"]')
    
    //add to my favorites
    heartBtn: By = By.xpath('(//i[@class="icon icon-heart"])[14]') //$x('(//i[@class="icon icon-heart"])[14]')
    
    //registration page
    registerLink: By = By.xpath('//*[@data-qa-id="topnav_register"]')
    email: By = By.xpath('//*[@id="id_email"]')
    confirmEmail: By = By.xpath('//*[@id="id_confirm_email"]')
    passwordReg: By = By.xpath('//*[@id="id_password"]')
    firstName: By = By.xpath('//*[@id="id_first_name"]')
    lastName: By = By.xpath('//*[@id="id_last_name"]')
    gender: By = By.xpath('(//*[@id="id_gender"])//option[@value="F"]')
    zip: By = By.xpath('//*[@id="id_zip_code"]')
    signUpBtn: By = By.xpath('//*[@data-qa-id="page-signup-cta"]')

    //for non-logged in scenarios
    menuBtn: By = By.xpath('//a[@class="menu-button button-nav"]')
    birthdayMenuBtn: By = By.xpath('//*[@id="birthday_menu_trigger"]')
    birthdayForHerLink: By = By.xpath('(//*[@id="birthday_menu_items"])//*[@class="category-menu-li "][2]')

    allInvLink: By = By.xpath('//*[@data-qa-id="mnav_invitations"]')
    invLink: By = By.xpath('(//*[@class="category-menu-li "])[2]') // another ('(//*[@class="gallery-categories__label"])[7]')
    
    //sign in link on evite home page
    signInLink: By = By.xpath('//*[@data-qa-id="topnav_signin"]')
   
    //sign in input fields and buttons on main Login Page
    emailField1: By = By.xpath('//*[@id="id_email"]')
    passwordField1: By = By.xpath('//*[@id="id_password"]')
    signInBtn1: By = By.xpath('//*[@data-qa-id="signin-button"]')
    signOutBtn: By = By.xpath('//*[@data-qa-id="topnav_signout"]')
    
    //sign in input fields on secondary login page
    emailField2: By = By.xpath('//input[@id="login-email"]')
    passwordField2: By = By.xpath('//input[@id="login-password"]')
    signInBtn2: By = By.xpath('//button[@id="loginModal__submit"]')


    createInvBtn: By = By.xpath('//*[@id="create_button"][1]') //$x('//*[@data-qa-id="create-event-cta"]')
    itemSelect: By = By.xpath('(//*[@class="row-item template"])[7]')
    eventTitle: By = By.css('[id="id_title"]')
    eventType: By = By.xpath('(//*[@data-qa-id="id_event_type"])//option[@value="graduation"]')
    hostedBy: By = By.xpath('//*[@data-qa-id="id_host_name"]')
    eventDate: By = By.xpath('//input[@class="startDate flatpickr-input form-control input active"]')
//    ('(//*[@data-qa-id="id_start-date"])[2]')
    eventTime: By = By.xpath('(//*[@data-qa-id="id_start-time"])')

    //preview or save draft
    previewBtn: By = By.xpath('//*[@data-qa-id="action_bar__preview_button"]') //By.id("button_preview")
    previewPopUp: By = By.xpath('//*[@data-qa-id="preview_modal__preview_button"]')
    closePreview: By = By.xpath('//a[@class="secondary-button button-secondary-inverse close_window"]') //('//*[@data-qa-id="button-close"]')
    saveDraftBtn: By = By.xpath('//*[@data-qa-id="button-draft"]') //By.id("button_draft")
    backBtn: By = By.id("button_back")

    //profile
    profileBtn: By = By.xpath('(//*[@class="menu nav-link hidden"])//a[@href="https://www.evite.com/profile/edit"]') 
    /* values tried for profile button :
    $x('(//*[@class="menu nav-link hidden"])//a[@href="https://www.evite.com/profile/edit"]')
    By.xpath('(//*[@id="user_menu"])[1]')
    By.xpath('(//*[@class="menu nav-link hidden"])//a[@href="https://www.evite.com/profile/edit"]') */

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
    async clickAllInv(){
        return this.click(this.allInvLink)
    }

    async clickInvitation(){
        return this.click(this.invLink)
    }
    async clickHeartBtn(){
        return this.click(this.heartBtn)
    }
    //Registration Page
    async clickRegistrationLink() {
        return this.click(this.registerLink)
    }
    async enterEmail(inputPar: string) {
        return this.setInput(this.email, `${inputPar}\n`)
    }
    async enterConfirmEmail(inputPar: string) {
        return this.setInput(this.confirmEmail, `${inputPar}\n`)
    }
    async enterPassword(inputPar: string){
        return this.setInput(this.passwordReg, `${inputPar}`)
    }
    async enterFirstName(inputPar: string) {
        return this.setInput(this.firstName, `${inputPar}\n`)
    }
    async enterLastName(inputPar: string){
        return this.setInput(this.lastName, `${inputPar}`)
    }
    async selectGender(){
    //(inputPar: string) { return this.setInput(this.gender, `${inputPar}\n`)
        return this.click(this.gender)
    }
    async enterZip(inputPar: string){
        return this.setInput(this.zip, `${inputPar}`)
    }
    async clickSignUpBtn() {
        return this.click(this.signUpBtn)
    }
    //Sign in
    async clickSignInLink() {
        return this.click(this.signInLink)
    }
    async mainloginEmail(inputPar: string) {
        return this.setInput(this.emailField1, `${inputPar}\n`)
    }

    async mainloginPassword(inputPar: string) {
        return this.setInput(this.passwordField1, `${inputPar}\n`)
    }
    
    async clickMainSignInBtn(){
        return this.click(this.signInBtn1)
    }
    async secloginEmail(inputPar: string) {
        return this.setInput(this.emailField2, `${inputPar}\n`)
    }

    async secloginPassword(inputPar: string) {
        return this.setInput(this.passwordField2, `${inputPar}\n`)
    }
    
    async clickSecSignInBtn(){
        return this.click(this.signInBtn2)
    }
    async clickSignOutBtn(){
        return this.click(this.signOutBtn)
    }

    //crete invitation
    async clickCreateInvBtn(){
        return this.click(this.createInvBtn)
    }
    async clickItemToSelect(){
        return this.click(this.itemSelect)
    }
    async eventTitleInput(inputPar: string) {
        return this.setInput(this.eventTitle, `${inputPar}\n`)
    }
    async clickeventTypeInput(){
        //(searchTerm: string){ return this.setInput(this.eventType, `${searchTerm}\n`)
        return this.click(this.eventType)
    }
    async hostNameInput(inputPar: string) {
        return this.setInput(this.hostedBy, `${inputPar}\n`)
    }
    async eventDateInput(dateInput){
        return this.setInput(this.eventDate, `${dateInput}\n`)
    }
    async eventTimeInput(timeInput: Date){
        return this.setInput(this.eventDate, `${timeInput}\n`)
    }
    async clickPreviewInv(){
        return this.click(this.previewBtn)
    }
    async clickPreviewBtn(){
        return this.click(this.previewPopUp)
    }
    async clickClosePreview(){
        return this.click(this.closePreview)
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