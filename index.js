const puppeteer = require('puppeteer');

console.log("Starting puppeteer!")

(async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.npmjs.com/package/puppeteer');

    page.screenshot("screenShot.png");
    console.log("screenshot done!");
})();