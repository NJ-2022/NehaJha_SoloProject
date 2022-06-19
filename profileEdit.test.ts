import { SoloPageObject } from './pageobject'
const eviteTest = new SoloPageObject()

test('Test: profile edit', async () => {
    await eviteTest.navigate()
    await eviteTest.clickSignInLink()
    await eviteTest.mainloginEmail('nehajha.1987@gmail.com')
    await eviteTest.mainloginPassword('qwer@1234')
    await eviteTest.clickMainSignInBtn()
    await eviteTest.driver.sleep(2000)
    await eviteTest.clickProfile()
    await eviteTest.driver.sleep(2000)
}) 

afterAll(async () => {
    await eviteTest.driver.quit()
})