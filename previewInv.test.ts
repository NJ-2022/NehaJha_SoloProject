import { SoloPageObject } from './pageobject'
const eviteTest = new SoloPageObject()

test('Test: create invitation and preview the invitation', async () => {
    await eviteTest.navigate()
    await eviteTest.driver.sleep(3000)
    await eviteTest.clickMenu() //click on menu
    await eviteTest.driver.sleep(1000)
    await eviteTest.clickAllInv() //click on the category chosen
    await eviteTest.driver.sleep(1000)
    await eviteTest.clickInvitation() //click on the invitation
    await eviteTest.driver.sleep(1000)
    await eviteTest.clickHeartBtn() // click on heart of 14th element on the page
    await eviteTest.driver.sleep(1000)
    await eviteTest.secloginEmail('nehajha.1987@gmail.com') // enter the email
    await eviteTest.secloginPassword('qwer@1234') //enter password
    await eviteTest.clickSecSignInBtn()
    await eviteTest.driver.sleep(2000)
    await eviteTest.clickItemToSelect() // select an invitation card

    await eviteTest.eventTitleInput('Party Time')  // enter the required details in invitation
    await eviteTest.driver.sleep(6000)

    await eviteTest.clickPreviewInv() // test if user can preview the invitation
    await eviteTest.clickPreviewBtn() // click on preview button in pop up window
    await eviteTest.driver.sleep(1000)
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
/*
import { SoloPageObject } from './pageobject'
const eviteTest = new SoloPageObject()

test('Test: Create an invitation and save it as a draft', async () => {
    await eviteTest.navigate()
    await eviteTest.search('Graduation') // enter "graduation" in search text box
    await eviteTest.driver.sleep(2000);
    await eviteTest.clickItemToSelect() // select the item/invitation 
    await eviteTest.driver.sleep(1000)
    await eviteTest.eventTitleInput('Graduation')  // enter the Event Title
    await eviteTest.eventTypeInput()  // enter the Event Title
    await eviteTest.hostNameInput("neha") //enter host name

    await eviteTest.driver.sleep(5000)

    //await eviteTest.clickSaveDraft() // test if user can save the draft invitation
    await eviteTest.clickPreviewInv() // test if user can preview the invitation
    await eviteTest.driver.sleep(1000)
    await eviteTest.secloginEmail('nehajha.1987@gmail.com') // enter the email address
    await eviteTest.secloginPassword('qwer@1234') //enter password
    await eviteTest.clickSecSignInBtn() //click on sign in button
    await eviteTest.driver.sleep(1000)

    await eviteTest.clickPreviewBtn()
    await eviteTest.clickClosePreview()

    //await eviteTest.clickBackBtn() // test if back button is working

    await eviteTest.driver.sleep(2000)
}) 

afterAll(async () => {
    await eviteTest.driver.quit()
})
*/

