'use strict';

const fs = require('fs');

fs.readFile('dist/package.json', 'utf8', function (readErr, data) {
  if (readErr) throw readErr;

  const pkg = JSON.parse(data);
  pkg.main = 'coffeelint-reporter.js';
  delete pkg.scripts;
  delete pkg.devDependencies;
  delete pkg.private;

  fs.writeFile('dist/package.json', JSON.stringify((pkg), null, 2), 'utf8', function (writeErr) {
    if (writeErr) throw writeErr;
    console.log('postbuild: package.json written');
  });
});
