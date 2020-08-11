const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://instagram.com/rocketseat_oficial');

  const imagesList = await page.evaluate(() => {
    const nodeList = document.querySelectorAll('article img');

    const imagesArray = [...nodeList];

    const imagesList = imagesArray.map(image => ({
      src: image.src
    }));

    return imagesList;
  });

  fs.writeFile('instagram.json', JSON.stringify(imagesList, null, 2), err => {
    if (err) throw new Error('Something went wrong!');
    console.log("Well done!");
  });

  await browser.close();
})();