import { SoloPageObject } from './pageobject'
const eviteTest = new SoloPageObject()

test('Test: search a card', async () => {
    await eviteTest.navigate() // opens the link
    await eviteTest.search('Graduation') // enter the text in the search bar on the evite home page
    await eviteTest.driver.sleep(5000);
})

afterAll(async () => {
    await eviteTest.driver.quit()
})