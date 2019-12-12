const fs = require('fs');
const path = require('path');
const coffeelint = require('coffeelint');

const CoffeLintReporter = require('../index');

const fixtures = (glob) => path.resolve(__dirname, 'fixtures', glob);
console.log = jest.fn();

it('should be able to report via publish method', async () => {
  const fileName = 'file.coffee';
  const coffee = await fs.promises.readFile(fixtures(fileName), 'utf-8');

  const coffeelintConfig = {
    max_line_length: {
      name: 'max_line_length',
      value: 40,
      level: 'warn',
      limitComments: true
    },
    no_trailing_whitespace: {
      name: 'no_trailing_whitespace',
      level: 'error',
      allowed_in_comments: false,
      allowed_in_empty_lines: false
    }
  };

  const result = coffeelint.lint(coffee, coffeelintConfig);
  const report = {
    paths: {
      [fileName]: result
    }
  };

  const coffeelintReporter = new CoffeLintReporter(report);
  coffeelintReporter.publish();

  expect(console.log).toHaveBeenCalled();
});

it('should not execute reporter when filename is not defined', async () => {
  const fileName = 'file.coffee';
  const coffee = await fs.promises.readFile(fixtures(fileName), 'utf-8');

  const coffeelintConfig = {
    max_line_length: {
      name: 'max_line_length',
      value: 40,
      level: 'warn',
      limitComments: true
    },
    no_trailing_whitespace: {
      name: 'no_trailing_whitespace',
      level: 'error',
      allowed_in_comments: false,
      allowed_in_empty_lines: false
    }
  };

  const result = coffeelint.lint(coffee, coffeelintConfig);
  const report = {
    paths: {
      '': result
    }
  };

  const coffeelintReporter = new CoffeLintReporter(report);
  coffeelintReporter.publish();

  expect(console.log).not.toHaveBeenCalled();
});
