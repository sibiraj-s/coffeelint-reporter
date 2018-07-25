# coffeelint-reporter

> A Reporter for Coffeelint

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
const reporter = require('coffeelint-reporter').reporter;

reporter(fileName, lintResults)
```

- **fileName** [`String`] Headlint for the report
- **lintResults** [`Object`] Results provided by `coffeelint.lint`, refer [coffeelint api](http://www.coffeelint.org/#api)
