const chalk = require('chalk');
const CliTable = require('cli-table3');

const cliTableConfig = {
  chars: {
    'top': '',
    'top-mid': '',
    'top-left': '',
    'top-right': '',
    'bottom': '',
    'bottom-mid': '',
    'bottom-left': '',
    'bottom-right': '',
    'left': '',
    'left-mid': '',
    'mid': '',
    'mid-mid': '',
    'right': '',
    'right-mid': '',
    'middle': ''
  }
};

const defaultOptions = {
  log: true
};

const reporter = function (fileName = '', results = [], opts = {}) {
  const table = new CliTable(cliTableConfig);

  const options = Object.assign({}, defaultOptions, opts);

  const isWin = process.platform === 'win32';
  const warnSign = '' + (isWin ? '' : '⚠');
  const errSign = '' + (isWin ? '' : '✖');
  const tickSign = '' + (isWin ? '' : '✔');

  let errors = 0;
  let warnings = 0;

  let formattedReport;

  if (fileName) {
    formattedReport = '\n' + chalk.green(chalk.underline(fileName)) + '\n';
  } else {
    formattedReport = '\n';
  }

  if (results.length) {
    results.forEach(function (result) {
      let hasError = false;

      if (result.level === 'error') {
        hasError = true;
        errors++;
      }

      if (result.level === 'warn') {
        warnings++;
      }

      table.push([
        chalk[hasError ? 'red' : 'yellow'](hasError ? errSign : warnSign),
        chalk[hasError ? 'red' : 'yellow']('line ' + result.lineNumber),
        chalk.blue(result.message),
        chalk.gray(result.context || '')
      ]);
    });

    formattedReport += table.toString();
  }

  if (warnings || errors) {
    formattedReport += '\n\n Completd with ';

    if (warnings) {
      formattedReport += chalk.yellow(warnings + ' warning' + (warnings === 1 ? '' : 's'));
    }

    if (warnings && errors) {
      formattedReport += ', ';
    }

    if (errors) {
      formattedReport += chalk.red(errors + ' error' + (errors === 1 ? '' : 's'));
    }
  } else {
    formattedReport += chalk.green(tickSign + ' No Problem');
  }

  formattedReport = formattedReport.replace(/(\r\n|\r|\n){2,}/g, '$1\n');

  if (options.log) {
    console.log(formattedReport);
  }

  return formattedReport;
};

module.exports = reporter;
