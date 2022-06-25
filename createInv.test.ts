import { SoloPageObject } from './pageobject'
const eviteTest = new SoloPageObject()

test('Test: Search, Select an invitation, Create an invitation and Save it as a Draft', async () => {
    await eviteTest.navigate()
    await eviteTest.search('Graduation') // enter "graduation" in search text box
    await eviteTest.driver.sleep(2000);
    await eviteTest.clickItemToSelect() // select the item/invitation 
    await eviteTest.driver.sleep(1000)
    await eviteTest.eventTitleInput('Graduation')  // enter the Event Title
    await eviteTest.clickeventTypeInput()  // enter the Event Title
    await eviteTest.hostNameInput("neha") //enter host name

    await eviteTest.driver.sleep(2000) // manually entering the date and time

    await eviteTest.clickSaveDraft() // click on save draft 
    await eviteTest.clickBackBtn() // click on back button

    await eviteTest.driver.sleep(2000)
}) 

afterAll(async () => {
    await eviteTest.driver.quit()
})