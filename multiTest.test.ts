import { SoloPageObject } from './pageobject'
const eviteTest = new SoloPageObject()

test('Test: To browse through Menu, select a category,  select a sub-category, add to favorites and sign in', async () => {
    await eviteTest.navigate()
    await eviteTest.driver.sleep(3000)
    await eviteTest.clickMenu() //click on menu
    await eviteTest.driver.sleep(1000)
    await eviteTest.clickAllInv() //click on birthday category
    await eviteTest.driver.sleep(1000)
    await eviteTest.clickInvitation() //click on sub-category "birthday for her"
    await eviteTest.driver.sleep(1000)
    await eviteTest.clickHeartBtn() // select an invitation template and click on heart nutton to add it to favorites
    await eviteTest.driver.sleep(1000)
    await eviteTest.secloginEmail('nehajha.1987@gmail.com') // enter the email address
    await eviteTest.secloginPassword('qwer@1234') //enter password
    await eviteTest.clickSecSignInBtn() //click on sign in button
    await eviteTest.driver.sleep(2000)
}) 

afterAll(async () => {
    await eviteTest.driver.quit()
})
