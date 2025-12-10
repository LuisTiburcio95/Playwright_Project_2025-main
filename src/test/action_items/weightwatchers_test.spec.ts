

import { test, expect } from '@playwright/test';

//create an array of zip codes

const zipcodes = ["11223", "10306",];

zipcodes.forEach(zip => {
  test("Weight Watchers workshop for " + zip, async ({ page }) => {
    await page.goto("https://www.weightwatchers.com/us");

    for (let i = 0; i < 1; i++) {

    //navigate to weight watchers
    await page.goto("https://www.weightwatchers.com/us");
    //click on find a workshop
    await page.locator('text=Find a Workshop').first().click();
    // wait to load the page
    await page.waitForTimeout(5000);
    //Click on the location search input box, enter zip code and submit
    const locationSearchInput = page.locator('#location-search');
    await locationSearchInput.fill("");
    await locationSearchInput.fill(zip);
    await page.waitForTimeout(5000);
    //click on search arrow button
    await page.locator('button[aria-label="Submit"]').click();
    await page.waitForTimeout(5000);
    //scroll down to see the search results
    await page.evaluate(() => window.scrollBy(0,300));
    //click on the first link from the search results
    const firstLink = page.locator('[class="linkUnderline-XyxpJ"]').first().click();
    //await firstLink.click();
    await page.waitForTimeout(5000);
    //capture the address and print it in the console
    const address = await page.locator('[class="address-FnT8k"]').textContent();
    console.log("The Address for " + zip + " is " + address);
    //scroll down to in-person workshop table
    const inPersonTable = page.locator('[class="title-UbUc9"]');
    await page.evaluate((el) => el.scrollIntoView(), await inPersonTable.elementHandle());
    await page.waitForTimeout(5000);
    //capture the table and print it in the console
    const table = await page.locator('[class="scheduleContainerMobile-ps6Rm"]').textContent();
    console.log("Upcoming In-Person Workshops");
    console.log(table);
    }
  });
});