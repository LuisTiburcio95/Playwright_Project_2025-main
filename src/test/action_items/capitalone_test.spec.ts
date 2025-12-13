import { Page,test } from "@playwright/test";
import { clickByIndex,scrollByPixels,getText,Click} from '../Reusable_Actions';

test('capital one - open account @ai', async ({ page }) => {

 // Navigate to Capital One Website
    await page.goto('https://www.capitalone.com');
    await page.waitForTimeout(2000)

    //hover on checking and savings link
    // Click on Checking and Savings link
    await clickByIndex(page, '//*[text()="Checking & Savings"]', 0, 'Checking & Savings Link');

    // Scroll down 700 pixels
    await scrollByPixels(page, 0, 300, 'Scroll to Accounts Section');
    await page.waitForTimeout(2500);

    // Click on 360 Performance Savings link
    await Click(page, '//*[text()=" 360 Performance Savings "]', '360 Performance Savings');
    await page.waitForTimeout(2500);

    // Click on Open Account button
    await clickByIndex(page, '//*[text()="Open account"]', 0, 'Open Account');
    await page.waitForTimeout (2000) 

    // Capture and print the result
    const result = await getText(page, '//*[@class="ods-text__heading--medium-large title"]', 'Account Open text');
    console.log('The account open text is: ' + result);

});