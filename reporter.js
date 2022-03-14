const colors = require('picocolors');
const columnify = require('columnify');

const defaultOptions = {
  log: true,
};

const reporter = (fileName = '', results = [], opts = {}) => {
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

  const table = [];

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
  }

  if (table.length > 0) {
    report += columnify(table, { showHeaders: false, columnSplitter: '  ' });
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
