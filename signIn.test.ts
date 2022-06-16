import { SoloPageObject } from './pageobject'
const eviteTest = new SoloPageObject()

test('Test 1: login with valid credentials', async () => {
    await eviteTest.navigate()
    await eviteTest.clickSignInLink()
    await eviteTest.loginEmail('nehajha.1987@gmail.com')
    await eviteTest.loginPassword('qwer@1234')
    await eviteTest.clickSignInBtn()
    await eviteTest.driver.sleep(3000)
    /* sign out functionality
    await eviteTest.clickSignOutBtn()
    await eviteTest.driver.sleep(1000);
    */

}) 

afterAll(async () => {
    await eviteTest.driver.quit()
})

/*
test('to find the whether the header contains the name post Login', async () => {
    await gbc.navigate()
    await gbc.clickAccountIcon()
    await gbc.loginEmail('h10@t.com')
    await gbc.loginPassword('111111')
    let text = await gbc.findHeader()
    await gbc.driver.sleep(1000)
    expect(text).toContain("$$$")
    await gbc.driver.sleep(5000);

})
*/

/*
test('test signout', async() =>{
    await gbc.navigate()
    await gbc.clickAccountIcon()
    await gbc.loginEmail('h10@t.com')
    await gbc.loginPassword('111111')
    await gbc.signOutfunc()
    await gbc.driver.sleep(1000)
    await gbc.clickAccountIcon()
    await gbc.loginEmail('h10@t.com')
    await gbc.loginPassword('111111')
    let text = await gbc.findHeader()
    await gbc.driver.sleep(1000)
    expect(text).toContain("$$$")
    await gbc.driver.sleep(5000);

})*/