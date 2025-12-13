import {Page, test} from '@playwright/test';
import { mouseHover,scrollByPixels,scrollToElement} from '../Reusable_Actions';

test('USPS mouse hover on element', async ({ page }) => {
    //navigate to USPS website
    await page.goto('https://www.usps.com/');
    //wait a few seconds for the page to load
    await page.waitForTimeout(2000); // Wait for 2 seconds

    //hover method
    //hover over the quick tools menu
    await mouseHover(page, "[class='qt-nav menuheader']", 'quick tools');
    //wait for a few seconds to see the process
    await page.waitForTimeout(2000);
    //click on schedule a pickup link
    await page.locator('[alt="Schedule a Pickup Icon"]').click();
    
    //scroll down whole page method
    //scroll down to the schedule a pickup form
    await scrollByPixels (page, 0, 200, 'schedule a pickup form');
    // Wait for 5 seconds after scrolling
    await page.waitForTimeout(5000); 

    //scroll to a element method
    //await scrollToElement(page, "[data-gtm-label='buy-stamps']", 'Buy Stamps');
    // Wait for 3 seconds after scrolling to see the process
    //await page.waitForTimeout(3000); 
});