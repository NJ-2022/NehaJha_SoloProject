import {By} from 'selenium-webdriver'
import {BasePage} from './basePage'
export class SoloPageObject extends BasePage {
    searchBar: By = By.xpath('//input[@data-qa-id="search_box_top-nav_input"]')
    
    //for non-logged in scenarios
    menuBtn: By = By.xpath('//a[@class="menu-button button-nav"]')
    birthdayMenuBtn: By = By.xpath('//*[@id="birthday_menu_trigger"]')
    birthdayForHerLink: By = By.xpath('(//*[@id="birthday_menu_items"])//*[@class="category-menu-li "][2]')

    //('(//*[@class="gallery-categories__label"])[7]')
    
    //siign in input fields and buttons
    signInLink: By = By.xpath('//*[@data-qa-id="topnav_signin"]')
    emailField: By = By.xpath('//input[@id="login-email"]')
    passwordField: By = By.xpath('//input[@id="login-password"]')
    signInBtn: By = By.xpath('//button[@id="loginModal__submit"]')
    signOutBtn: By = By.xpath('//*[@data-qa-id="topnav_signout"]')
    
    //add to my favorites
    heartBtn: By = By.xpath('(//i[@class="icon icon-heart"])[14]')
    //$x('(//i[@class="icon icon-heart"])[14]')

    
    //preview or save draft
    previewBtn: By = By.id("button_preview")
    saveDraftBtn: By = By.id("button_draft")
    backBtn: By = By.id("button_back")

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
    async loginEmail(searchTerm: string) {
        return this.setInput(this.emailField, `${searchTerm}\n`)
    }

    async loginPassword(searchTerm: string) {
        return this.setInput(this.passwordField, `${searchTerm}\n`)
    }
    
    async clickSignInBtn(){
        return this.click(this.signInBtn)
    }
    async clickSignOutBtn(){
        return this.click(this.signOutBtn)
    }
}
    /*
    async getResults() {
        return this.getText(this.results)
    }
    async clickRegisterNewBtn() {
        return this.click(this.registerNewAccountBtn)
    }

    async registerFirstName(searchTerm: string) {
        return this.setInput(this.firstNameInput, `${searchTerm}\n`)
    }

    async registerLastName(searchTerm: string) {
        return this.setInput(this.lastNameInput, `${searchTerm}\n`)
    }

    async registerEmail(searchTerm: string) {
        return this.setInput(this.registerEmailInput, `${searchTerm}\n`)
    }

    async clickAccountType() {
        return this.click(this.registerAccountType)
    }

    async registerPassword(searchTerm: string) {
        return this.setInput(this.registerPasswordInput, `${searchTerm}\n`)
    }

    async registerVerifyPassword(searchTerm: string) {
        return this.setInput(this.registerVerifyPasswordInput, `${searchTerm}\n`)
    }

    async clickRegisterBtn() {
        return this.click(this.registerAccountBtn)
    }

    async findHeader() {
        return this.getText(this.nameHeaderAccount)
    }

    async findErrorMessage() {
        return this.getText(this.errorMessage)
    }

    async signOutfunc() {
        return this.click(this.signOut)
    }*/