const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  use: {
    headless: true,
    launchOptions: {
      executablePath: '/usr/bin/google-chrome-stable',
      args: ['--no-sandbox'],
    },
  },
});
