const constants = require("./Constants");
const cron = require("node-cron");
const puppeteer = require("puppeteer");
const basePath = process.cwd();
console.log(basePath);
const CRX_PATH = `${basePath}/extensions/TradeRocket/extension_1_0_7_0`;

console.log("Running ...");
var task = cron.schedule(
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
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        `--disable-extensions-except=${CRX_PATH}`,
        `--load-extension=${CRX_PATH}`,
      ],
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

function exitHandler(options, exitCode) {
  task.stop();
  if (options.cleanup) console.log("clean");
  if (exitCode || exitCode === 0) console.log(exitCode);
  if (options.exit) process.exit();
}

//do something when app is closing
process.on("exit", exitHandler.bind(null, { cleanup: true }));

//catches ctrl+c event
process.on("SIGINT", exitHandler.bind(null, { exit: true }));

// catches "kill pid" (for example: nodemon restart)
process.on("SIGUSR1", exitHandler.bind(null, { exit: true }));
process.on("SIGUSR2", exitHandler.bind(null, { exit: true }));

//catches uncaught exceptions
process.on("uncaughtException", exitHandler.bind(null, { exit: true }));
