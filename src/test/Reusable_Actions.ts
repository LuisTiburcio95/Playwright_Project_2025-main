import {Page} from "@playwright/test"

//export means it's reusable outside this file

//method to click on any unique element
export async function Click (page:Page, locator:string, elementName:string) {
    console.log("Clicking on element" + elementName);
    await page.locator(locator).click();
}// end of click method

//method to click on any element by index
export async function clickByIndex (page:Page, locator:string, index:number, elementName:string) {
    console.log("Clicking on element" + elementName);
    await page.locator(locator).nth(index).click();
} //end of clickElementByIndex method

//method to type on any unique element
export async function type (page:Page, locator:string, uservalue:string, elementName:string) {
    console.log("Typing on element" + elementName);
    let element = page.locator(locator);
    await element.fill("");
    await element.fill(uservalue);
} //end of type


//method to type on any element by index
export async function typeByIndex (page:Page, locator:string, index:number, userValue:string, elementName:string) {
    console.log("Typing on element" + elementName);
    let element = page.locator(locator).nth(index);
    await element.fill("");
    await element.fill(userValue);
} //end of typeByIndex

//method to get text from any unique element
export async function getText (page:Page, locator:string, elementName:string) {
    console.log("Getting text from element" + elementName);
    let result = await page.locator(locator). innerText();
    return result;
} //end of getText

//Method to select from a dropdown
export async function selectFromDropdown(page:Page, locator:string, elementName:string){
console.log("Selecting value from dropdown element" + elementName);
await page.locator(locator).selectOption(optionValue);
};// end of select From Dropdown method

//method to mousehover 
export async function mouseHover(page:Page, locator:string, elementName:string) {
    console.log("Hovering over element" + elementName);
    await page.locator(locator).hover();
} //end of mouseHover method

//method to scroll the whole page by pixels
export async function scrollByPixels(page: Page, x: number, y: number, elementName: string) {
    console.log('Scrolling whole page by x: ' + x + ', y: ' + y + ' for: ' + elementName);
    // Ensure the page is loaded and scrollable
    await page.waitForLoadState('domcontentloaded');
    await page.mouse.wheel(x, y);
} //end of scrollByPixels method

//method to scroll to a specific element
export async function scrollToElement(page: Page, locator: string, elementName: string) {
    console.log("Scrolling to element" + elementName);
    await page.locator(locator).scrollIntoViewIfNeeded();
} //end of scrollToElement method