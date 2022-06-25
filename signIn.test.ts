import { SoloPageObject } from './pageobject'
const eviteTest = new SoloPageObject()

test('Test 1: login with valid credentials', async () => {
    await eviteTest.navigate()
    await eviteTest.clickSignInLink() // click on sign in link
    await eviteTest.mainloginEmail('nehajha.1987@gmail.com') // enter email address
    await eviteTest.mainloginPassword('qwer@1234') // enter password
    await eviteTest.clickMainSignInBtn() // click on sign in button
    await eviteTest.driver.sleep(2000)
}) 

afterAll(async () => {
    await eviteTest.driver.quit()
})