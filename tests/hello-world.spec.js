const { test, expect } = require('@playwright/test');
const path = require('path');
const { pathToFileURL } = require('url');

test('button shows привет, мир after click', async ({ page }) => {
  const pageUrl = pathToFileURL(path.join(__dirname, '..', 'index.html')).href;

  await page.goto(pageUrl);
  await page.click('#show-message');

  await expect(page.locator('#message')).toHaveText('привет, мир');
});
