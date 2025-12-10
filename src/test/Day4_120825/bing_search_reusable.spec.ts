import {Page, test} from '@playwright/test';
import { getText,type } from '../Reusable_Actions';

let page:Page; // Initialize paga variable for browser since we are calling multiple tests

test.beforeAll(async ({browser})=>{
    page = await browser.newPage();
}); //end of before all

test ('search for playwright keyword on bing', async()=>{
    await page.goto('https://www.bing.com');
    await page.waitForTimeout(3000); // wait for few seconds
    await type (page, "[name='q']", 'Playwright Testing', 'Search Box');
    await page.keyboard.press('Enter');// hitting enter key after typing
}); // end of test 1

test ('capture the search number on bing for playwright keyword', async()=>{
    let searchResults = await getText (page, '[class="sb_count"]', 'Search Results Text');
    console.log(" Search Results is: "+ searchResults);
    let resultsArray = searchResults.split(' ');
    console.log(" Search Number for Playwright Testing: " + resultsArray[1]);
}); // end of test 2