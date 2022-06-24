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
    await eviteTest.hostNameInput("neha")

    await eviteTest.driver.sleep(2000)

    await eviteTest.clickSaveDraft() // test if user can save the draft invitation

    //await eviteTest.clickPreviewInv() // test if user can preview the invitation

    await eviteTest.clickBackBtn() // test if back button is working

    await eviteTest.driver.sleep(2000)
}) 

afterAll(async () => {
    await eviteTest.driver.quit()
})