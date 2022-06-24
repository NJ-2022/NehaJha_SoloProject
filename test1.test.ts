import { Driver } from 'selenium-webdriver/chrome'
import { SoloPageObject } from './pageobject'
const eviteTest = new SoloPageObject()

test('Test: create invitation', async () => {
    await eviteTest.navigate()
    await eviteTest.driver.sleep(3000)
    await eviteTest.clickMenu() //click on menu
    await eviteTest.driver.sleep(1000)
    await eviteTest.clickAllInv() //click on birthday
    await eviteTest.driver.sleep(1000)
    await eviteTest.clickGraduation() //click on birthday for her
    await eviteTest.driver.sleep(1000)
    await eviteTest.clickHeartBtn() // click on heart of 14th element on the page
    await eviteTest.driver.sleep(1000)
    await eviteTest.secloginEmail('nehajha.1987@gmail.com') // enter the email
    await eviteTest.secloginPassword('qwer@1234') //enter password
    await eviteTest.clickSecSignInBtn()
    await eviteTest.driver.sleep(2000)
    await eviteTest.clickItemToSelect() // test if user can select an invitation card

    await eviteTest.eventTitleInput('Graduation Ceremony')  //test if user can edit the invitation details
    await eviteTest.eventDateInput(`06/23/2022`)
    await eviteTest.driver.sleep(2000)

    await eviteTest.clickSaveDraft() // test if user can save the draft invitation

    await eviteTest.clickPreviewInv() // test if user can preview the invitation

    await eviteTest.clickBackBtn() //test if back button is working
    await eviteTest.driver.sleep(1000)

    await eviteTest.clickSignOutBtn()
    await eviteTest.driver.sleep(1000);

    //await eviteTest.clickProfile() // test if user can edit the profile details
    //await eviteTest.driver.sleep(2000)
}) 

afterAll(async () => {
    await eviteTest.driver.quit()
})

/* 
tests working
1. search
2. login
3. add to fav
4. create invitation 
5. save draft
6. preview invitation

tests not working
1. Unable to enter details for time field in create invitation journey
2. edit profile
*/
