import { Driver } from 'selenium-webdriver/chrome'
import { SoloPageObject } from './pageobject'
const eviteTest = new SoloPageObject()

test('Test: Registration', async () => {
    await eviteTest.navigate()
    await eviteTest.driver.sleep(3000)
    await eviteTest.clickRegistrationLink()
    await eviteTest.driver.sleep(1000);
    await eviteTest.enterEmail("nehajha.1987@gmail.com")
    await eviteTest.enterConfirmEmail("nehajha.1987@gmail.com")
    await eviteTest.enterPassword("qwer@1234")
    await eviteTest.enterFirstName("neha")
    await eviteTest.enterLastName("jha")
    await eviteTest.enterZip("90503")
    await eviteTest.selectGender()
    await eviteTest.clickSignUpBtn()
    await eviteTest.driver.sleep(2000)
  }) 

afterAll(async () => {
    await eviteTest.driver.quit()
})