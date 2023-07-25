const screenshot = 'login_output.png';
const puppeteer = require('puppeteer');



//modify constatnts below if needed:

const url = 'https://planetcampus-selfcare.wifirst.net/';
const mdp = 'password';
const e_mail = 'email@gmail.com';




(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url);
  await page.content();

  await page.waitForSelector("[name='password']");
  await page.type("[name='email']", e_mail );
  await page.waitForSelector("[name='password']");
  await page.type("[name='password']", mdp );
  await page.waitForSelector("[name='remember']");
  await page.click('.checkboxInput-0-2-44');
  await page.waitForSelector("[type='submit']");
  await page.click('.button-0-2-59');

  await page.content();
  await page.waitForSelector("[class='welcomeTextWelcome-0-2-84']");
  
  await page.screenshot({path: screenshot  });
  await browser.close();

})();


