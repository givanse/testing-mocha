const path = require('path');
const fs = require('fs');
const Mocha = require('mocha');

const options = {
  ignoreLeaks: false,
  color: true,
  //allowUncaught: false,
  globals: [].concat('jQuery').concat(['FOOBAR']),
};
const mocha = new Mocha(options);

const testDir = path.join(__dirname, '..', 'test');
// Add each .js file to the mocha instance
fs.readdirSync(testDir).filter(function(file) {
  // Only keep the .js files
  return file.substr(-3) === '.js';
})
.forEach(function(file) {
  mocha.addFile(path.join(testDir, file));
});

const runner = mocha.run(function(failures) {
  // exit with non-zero status if there were failures
  process.exitCode = failures ? 1 : 0;
});
