const { test, expect } = require('@playwright/test');
const path = require('path');
const { pathToFileURL } = require('url');

test('multiply button shows product of entered numbers', async ({ page }) => {
  const pageUrl = pathToFileURL(path.join(__dirname, '..', 'index.html')).href;

  await page.goto(pageUrl);
  await page.fill('#number-1', '2');
  await page.fill('#number-2', '5');
  await page.fill('#number-3', '10');
  await page.click('#multiply-button');

  await expect(page.locator('#result')).toHaveText('Результат: 100');
});
