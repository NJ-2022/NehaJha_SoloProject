import { Driver } from 'selenium-webdriver/chrome'
import { SoloPageObject } from './pageobject'
const eviteTest = new SoloPageObject()

/* Note: I have already registered an account with this email address. 
 Hence the application will throw an error saying "email address is already registerd" */

test('Test: Registration', async () => {
    await eviteTest.navigate()
    await eviteTest.driver.sleep(3000)
    await eviteTest.clickRegistrationLink() //click on register link
    await eviteTest.driver.sleep(1000);
    await eviteTest.enterEmail("nehajha.1987@gmail.com") // enter an email address
    await eviteTest.enterConfirmEmail("nehajha.1987@gmail.com") // enter confirm email address
    await eviteTest.enterPassword("qwer@1234") // choose a password
    await eviteTest.enterFirstName("neha") // enter first name
    await eviteTest.enterLastName("jha") // enter last name
    await eviteTest.enterZip("90503") // enter zip code
    await eviteTest.selectGender() // select a gender
    await eviteTest.clickSignUpBtn() // click on Sign Up Button
    await eviteTest.driver.sleep(2000)
  }) 

afterAll(async () => {
    await eviteTest.driver.quit()
})