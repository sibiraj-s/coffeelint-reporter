'use strict';

const chalk = require('chalk');
const cliTable = require('cli-table3');

const cliTableConfig = {
  chars: {
    'top': '', 'top-mid': '', 'top-left': '', 'top-right': '',
    'bottom': '', 'bottom-mid': '', 'bottom-left': '', 'bottom-right': '',
    'left': '', 'left-mid': '', 'mid': '', 'mid-mid': '',
    'right': '', 'right-mid': '', 'middle': ' '
  }
};

const reporter = function (fileName = '', results = []) {

  const table = new cliTable(cliTableConfig);

  const is_win = process.platform === 'win32';
  const warn_sign = '' + (is_win ? '' : '⚠');
  const err_sign = '' + (is_win ? '' : '✖');
  const happy_sign = '' + (is_win ? '' : '✔');

  let errors = 0;
  let warnings = 0;

  if (fileName) {
    console.log('\n' + chalk.green(chalk.underline(fileName)) + '\n');
  }

  if (results.length) {
    results.forEach(function (result) {

      const context = result.context;
      const level = result.level;
      const lineNumber = result.lineNumber;
      const message = result.message;
      let hasError = false;

      if (level === 'error') {
        hasError = true;
        errors++;
      }
      if (level === 'warn') {
        warnings++;
      }

      table.push([
        chalk[hasError ? 'red' : 'yellow'](hasError ? err_sign : warn_sign),
        chalk[hasError ? 'red' : 'yellow']('line ' + lineNumber),
        chalk.blue(message),
        chalk.gray(context || '')
      ]);
    });

    console.log(table.toString());
  }

  if (warnings || errors) {

    let countMessage = '\n';

    if (warnings) {
      countMessage += chalk.yellow(warn_sign + ' ' + warnings + ' warning' + (warnings === 1 ? '' : 's'));
    }
    if (warnings && errors) {
      countMessage += ', ';
    }
    if (errors) {
      countMessage += chalk.red(err_sign + ' ' + errors + ' error' + (errors === 1 ? '' : 's'));
    }

    console.log(countMessage);

  } else {
    console.log(chalk.green(happy_sign + ' No Problem \n'));
  }

  return;
};

const CoffeelintReporter = (function () {

  CoffeelintReporter.reporter = reporter;

  function CoffeelintReporter(error_report) {
    this.error_report = error_report;
  }

  CoffeelintReporter.prototype.publish = function () {
    const reports = this.error_report.paths;

    for (const fileName in reports) {
      if (fileName) {
        results = reports[fileName];
        reporter(fileName, results);
      }
    }
  };

  return CoffeelintReporter;

})();

module.exports = CoffeelintReporter;
