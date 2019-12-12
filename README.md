# coffeelint-reporter

> A Reporter for Coffeelint

[![NPM Version](https://img.shields.io/npm/v/coffeelint-reporter.svg)](https://www.npmjs.com/package/coffeelint-reporter)
[![License](https://img.shields.io/npm/l/coffeelint-reporter.svg)](https://github.com/sibiraj-s/coffeelint-reporter/blob/master/LICENSE)
[![Tests](https://github.com/sibiraj-s/coffeelint-reporter/workflows/Tests/badge.svg)](https://github.com/sibiraj-s/coffeelint-reporter/actions)

## Install

```bash
npm install coffeelint-reporter --save-dev
```

### Usage with cli

```bash
coffeelint index.coffee --reporter coffeelint-reporter
```

Refer coffelint usage with cli [here](http://www.coffeelint.org/#usage)

### Usage with Runtime API

```js
const reporter = require('coffeelint-reporter/reporter');

const options = {
  log: false
};

const log = reporter(fileName, lintResults, options);
console.log(log); // formatted log {string}
```

- **fileName** `{string}` - Headlint for the report
- **lintResults** `{Array<object>}` - Results provided by `coffeelint.lint`, refer [coffeelint api](http://www.coffeelint.org/#api)
- **options** `{object}` - Options for reporter
  - **log** `{boolean}` - enable or disable logging to console
