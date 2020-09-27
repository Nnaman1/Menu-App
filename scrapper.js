const puppeteer = require('puppeteer');
const { url } = require('./config')


    ; (async () => {
        // Open browser
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage()

        // Close browser
        await browser.close();
    })().catch(error => {
        console.log(error)
        process.emit(1)
    })