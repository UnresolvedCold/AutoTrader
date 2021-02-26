const constants = require("./Constants");
const cron = require("node-cron");
const puppeteer = require("puppeteer");

cron.schedule(
  `00 ${constants.startTime[1]} ${constants.startTime[0]} * * *`,
  async () => {
    console.log(
      `Started Job at ${constants.startTime[0]}:${constants.startTime[1]}`
    );
    console.log(
      `Job will end at ${constants.endTime[0]}:${constants.endTime[1]}`
    );
    const browser = await puppeteer.launch({
      headless: false,
      executablePath: constants.ChromePath,
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 768 });
    await page.goto("https://streakv3.zerodha.com/", {
      waitUntil: "networkidle0",
    });
    await page.waitForSelector("#userid", {
      visible: true,
    });

    // Login Via Kite
    await page.type("#userid", constants.Id, { delay: 20 });
    await page.type("#password", constants.Password, { delay: 20 });

    await page.evaluate(() => {
      let elements = document.getElementsByClassName("button-orange wide");
      for (let element of elements) element.click();
    });
    await page.waitForSelector("#pin", {
      visible: true,
    });

    for (var i = 0; i < 6; i++) {
      await page.keyboard.press(constants.Pin.charAt(i));
    }
    await page.evaluate(() => {
      let elements = document.getElementsByClassName("button-orange wide");
      for (let element of elements) element.click();
    });
    await page.waitForTimeout(
      constants.marketInterval(constants.startTime, constants.endTime)
    );
    browser.close();
  }
);
