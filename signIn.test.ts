import { SoloPageObject } from './pageobject'
const eviteTest = new SoloPageObject()

test('Test 1: login with valid credentials', async () => {
    await eviteTest.navigate()
    await eviteTest.clickSignInLink()
    await eviteTest.mainloginEmail('nehajha.1987@gmail.com')
    await eviteTest.mainloginPassword('qwer@1234')
    await eviteTest.clickMainSignInBtn()
    await eviteTest.driver.sleep(5000)
}) 

afterAll(async () => {
    await eviteTest.driver.quit()
})