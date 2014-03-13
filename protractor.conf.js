exports.config = {

  baseUrl: 'http://localhost:3000',

  seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: [
    'test/e2e/**/*.js'
  ]
};