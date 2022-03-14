const colors = require('picocolors');
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
    'middle': '',
  },
};

const defaultOptions = {
  log: true,
};

const reporter = (fileName = '', results = [], opts = {}) => {
  const table = new CliTable(cliTableConfig);

  const options = { ...defaultOptions, ...opts };

  const isWin = process.platform === 'win32';
  const warnSign = isWin ? '' : '⚠';
  const errSign = isWin ? '' : '✖';
  const tickSign = isWin ? '' : '✔';

  let report;
  let errors = 0;
  let warnings = 0;

  if (fileName) {
    report = `\n${colors.green(colors.underline(fileName))}\n`;
  } else {
    report = '\n';
  }

  if (results.length) {
    results.forEach((result) => {
      const hasError = result.level === 'error';

      if (hasError) {
        errors += 1;
      } else {
        warnings += 1;
      }

      table.push([
        colors[hasError ? 'red' : 'yellow'](hasError ? errSign : warnSign),
        colors[hasError ? 'red' : 'yellow'](`line ${result.lineNumber}`),
        colors.blue(result.message),
        colors.gray(result.context || ''),
      ]);
    });

    report += table.toString();
  }

  if (!warnings && !errors) {
    report += colors.green(` ${tickSign} No Problems`);
  }

  report = report.replace(/(?:\r\n|\r|\n){2,}/g, '$1\n');

  if (options.log) {
    console.log(report);
  }

  return report;
};

module.exports = reporter;
