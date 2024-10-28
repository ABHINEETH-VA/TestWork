// @ts-check
const { devices } = require('@playwright/test');
const os = require('os');
import dotenv from 'dotenv'
dotenv.config();

const config = {
  testDir: './tests',
  //retries :2,

  /* Maximum time one test can run for. */
  timeout: 80 * 1000,
  expect: {
    timeout: 40000
  },

  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    launchOptions:{args: ["--start-maximized"]},
    browserName : 'chromium',
    headless : false,
    screenshot : 'on',
    trace : 'on',//off,on
    viewport:null,

  },

  workers: os.cpus().length,

};

module.exports = config;
