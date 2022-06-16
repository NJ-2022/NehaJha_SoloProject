import { SoloPageObject } from './pageobject'
const eviteTest = new SoloPageObject()

test('To test if user is able to select a particular type of invitation', async () => {
    await eviteTest.navigate() 
    //await eviteTest.clickSignInLink() //clicks on signin link
   //clicks on sign in button
    await eviteTest.driver.sleep(3000)
    await eviteTest.clickMenu() //click on menu
    await eviteTest.driver.sleep(1000)
    await eviteTest.clickBirthdayMenu() //click on birthday
    await eviteTest.driver.sleep(1000)
    await eviteTest.clickBirthdayForHerLink() //click on birthday for her
    await eviteTest.driver.sleep(1000)
    await eviteTest.clickHeartBtn() // click on heart of 14th element on the page
    await eviteTest.driver.sleep(1000)
    await eviteTest.loginEmail('nehajha.1987@gmail.com') // enter the email
    await eviteTest.loginPassword('qwer@1234') //enter password
    await eviteTest.clickSignInBtn()
    //await eviteTest.driver.quit()
})


afterAll(async () => {
    await eviteTest.driver.quit()
})


/*test('To test if user is able to select a particular type of invitation', async () => {
    await eviteTest.navigate() 
    await eviteTest.clickSignInLink() //clicks on signin link
    await eviteTest.loginEmail('nehajha.1987@gmail.com') // enter the email
    await eviteTest.loginPassword('qwer@1234') //enter password
    await eviteTest.clickSignInBtn() //clicks on sign in button
    await eviteTest.driver.sleep(3000) 
    await eviteTest.clickMenu() //click on menu
    await eviteTest.driver.sleep(1000)
    await eviteTest.clickBirthdayMenu() //click on birthday
    await eviteTest.driver.sleep(1000)
    await eviteTest.clickBirthdayForHerLink() //click on birthday for her
    await eviteTest.driver.sleep(1000)
    await eviteTest.clickHeartBtn() // click on heart of 14th element on the page
      await eviteTest.driver.sleep(1000)
})

afterAll(async () => {
    await eviteTest.driver.quit()
})*/