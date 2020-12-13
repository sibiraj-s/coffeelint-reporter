const reporter = require('./reporter');

class CoffeelintReporter {
  constructor(errorReport) {
    this.errorReport = errorReport;
  }

  publish() {
    const reports = this.errorReport.paths;

    for (const fileName in reports) {
      if (fileName) {
        const results = reports[fileName];
        reporter(fileName, results);
      }
    }
  }
}

module.exports = CoffeelintReporter;
