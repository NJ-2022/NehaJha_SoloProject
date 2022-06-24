import { SoloPageObject } from './pageobject'
const eviteTest = new SoloPageObject()

test('To test is user is able to search a card', async () => {
    await eviteTest.navigate()
    await eviteTest.search('Graduation')
    await eviteTest.driver.sleep(5000);
})

afterAll(async () => {
    await eviteTest.driver.quit()
})