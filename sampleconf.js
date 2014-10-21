exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['sample.js'],
    capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {'args': ['--disable-extensions']}
  }
};