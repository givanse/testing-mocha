const assert = require('assert');
const fs = require('fs');

function readFile() {
  fs.readFile('index.test.js', function() {
    throw new Error('an error');
  });
}

describe('a suite', function() {
  before(function() {
    const window = global || window;
    window.jQuery = {};
    window.FOOBAR = {};
  });

  beforeEach(function() {
    readFile();
  });

  it('a test', function() {
    assert.ok(true);
  });
});
