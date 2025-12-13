import {Page, test} from '@playwright/test';
import { mouseHover,clickByIndex,scrollByPixels,type,getText,Click} from '../Reusable_Actions';

test('USPS action item @ai', async ({ page }) => {

    //Navigate to usps web site
    await page.goto('https://www.usps.com/');
    //wait for a few seconds
    await page.waitForTimeout(2000); // Wait for 2 seconds
    //hover over the shop module
    await mouseHover(page, 'a.menuitem[role="menuitem"][href*="store.usps.com"]', 'Shop link');
    await page.waitForTimeout(2000);
    //click on the "Stamps" link
    await clickByIndex(page, '//*[text()="Stamps"]', 0, 'Stamps Link');
    await page.waitForTimeout(2000); // Wait for 2 seconds
    //click on the checkbox under category section 
    await clickByIndex(page, '//*[@class="checkbox-label"]', 0, 'Category Checkbox');
    //click on the checkbox additional postage
    await clickByIndex(page, '//*[@class="checkbox-label"]', 4, 'Additional Postage Checkbox');
    //scroll down 300 pixels 
    await scrollByPixels(page, 0, 300, 'Page');
    //Click on the first stamp by index
    await clickByIndex(page, '//*[@class="results-product-desc"]', 0, 'First Stamp');
    //add to the cart 
    await Click(page, '//*[@id="addToCartVisBtn122104"]', 'Add to Cart Button');
    //view cart 
    await Click(page, '//*[text()="View Cart"]', 'View Cart Button');
    //enter 2 on the quantity field 
    await type(page, '//*[@class="col-8 form-control"]', '2', 'Quantity Field');
    //capture the stamp information under item section and print
    const stampInfo = await getText(page, '//*[@class="prod-info-detail"]', 'Stamp Information');
    console.log('Stamp Information:', stampInfo);

});