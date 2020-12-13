const fs = require('fs');
const path = require('path');
const coffeelint = require('@coffeelint/cli');

const actualReporter = require('../reporter');

const fixtures = (glob) => path.resolve(__dirname, 'fixtures', glob);

const reporter = jest.fn(actualReporter);
console.log = jest.fn();

const warnSign = '⚠';
const errSign = '✖';
const tickSign = '✔';

describe('linux', () => {
  it('should report correctly for file without errors or warnings', async () => {
    const fileName = 'file.coffee';
    const coffee = await fs.promises.readFile(fixtures(fileName), 'utf-8');

    const coffeelintConfig = {
      max_line_length: {
        name: 'max_line_length',
        value: 100,
        level: 'warn',
        limitComments: true,
      },
      no_trailing_whitespace: {
        name: 'no_trailing_whitespace',
        level: 'ignore',
        allowed_in_comments: false,
        allowed_in_empty_lines: false,
      },
    };

    const result = coffeelint.lint(coffee, coffeelintConfig);
    const log = reporter(fileName, result);

    expect(reporter).toHaveReturned();

    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(expect.any(String));

    expect(console.log.mock.calls[0][0]).toContain('No Problem');
    expect(log).toContain(tickSign);
    expect(log).not.toContain(warnSign);
    expect(log).not.toContain(errSign);
  });

  it('should report warnings correctly', async () => {
    const fileName = 'file.coffee';
    const coffee = await fs.promises.readFile(fixtures(fileName), 'utf-8');

    const coffeelintConfig = {
      max_line_length: {
        name: 'max_line_length',
        value: 40,
        level: 'warn',
        limitComments: true,
      },
      no_trailing_whitespace: {
        name: 'no_trailing_whitespace',
        level: 'ignore',
        allowed_in_comments: false,
        allowed_in_empty_lines: false,
      },
    };

    const result = coffeelint.lint(coffee, coffeelintConfig);
    const log = reporter(fileName, result);

    expect(reporter).toHaveReturned();

    expect(console.log).toHaveBeenCalledTimes(1);

    expect(log).not.toContain(tickSign);
    expect(log).toContain(warnSign);
    expect(log).not.toContain(errSign);
  });

  it('should report errors correctly', async () => {
    const fileName = 'file.coffee';
    const coffee = await fs.promises.readFile(fixtures(fileName), 'utf-8');

    const coffeelintConfig = {
      max_line_length: {
        name: 'max_line_length',
        value: 40,
        level: 'error',
        limitComments: true,
      },
    };

    const result = coffeelint.lint(coffee, coffeelintConfig);
    const log = reporter(fileName, result);

    expect(reporter).toHaveReturned();

    expect(console.log).toHaveBeenCalledTimes(1);

    expect(log).not.toContain(tickSign);
    expect(log).not.toContain(warnSign);
    expect(log).toContain(errSign);
  });

  it('should report errors and warnings correctly', async () => {
    const fileName = 'file.coffee';
    const coffee = await fs.promises.readFile(fixtures(fileName), 'utf-8');

    const coffeelintConfig = {
      max_line_length: {
        name: 'max_line_length',
        value: 40,
        level: 'warn',
        limitComments: true,
      },
      no_trailing_whitespace: {
        name: 'no_trailing_whitespace',
        level: 'error',
        allowed_in_comments: false,
        allowed_in_empty_lines: false,
      },
    };

    const result = coffeelint.lint(coffee, coffeelintConfig);
    const log = reporter(fileName, result);

    expect(reporter).toHaveReturned();

    expect(console.log).toHaveBeenCalledTimes(1);

    expect(log).not.toContain(tickSign);
    expect(log).toContain(warnSign);
    expect(log).toContain(errSign);
  });

  it('should report without filename', async () => {
    const fileName = 'file.coffee';
    const coffee = await fs.promises.readFile(fixtures(fileName), 'utf-8');

    const coffeelintConfig = {
      max_line_length: {
        name: 'max_line_length',
        value: 40,
        level: 'warn',
        limitComments: true,
      },
      no_trailing_whitespace: {
        name: 'no_trailing_whitespace',
        level: 'error',
        allowed_in_comments: false,
        allowed_in_empty_lines: false,
      },
    };

    const result = coffeelint.lint(coffee, coffeelintConfig);
    const log = reporter(undefined, result);

    expect(reporter).toHaveReturned();

    expect(console.log).toHaveBeenCalledTimes(1);

    expect(log).not.toContain(fileName);
    expect(log).not.toContain(tickSign);
    expect(log).toContain(warnSign);
    expect(log).toContain(errSign);
  });

  it('should not log when logging is disabled', async () => {
    const fileName = 'file.coffee';
    const coffee = await fs.promises.readFile(fixtures(fileName), 'utf-8');

    const coffeelintConfig = {
      max_line_length: {
        name: 'max_line_length',
        value: 40,
        level: 'warn',
        limitComments: true,
      },
      no_trailing_whitespace: {
        name: 'no_trailing_whitespace',
        level: 'error',
        allowed_in_comments: false,
        allowed_in_empty_lines: false,
      },
    };

    const result = coffeelint.lint(coffee, coffeelintConfig);
    const log = reporter(fileName, result, { log: false });

    expect(reporter).toHaveReturned();
    expect(console.log).not.toHaveBeenCalled();

    expect(log).not.toContain(tickSign);
    expect(log).toContain(warnSign);
    expect(log).toContain(errSign);
  });

  it('should not throw errors when results are not passed', () => {
    const fileName = 'file.coffee';
    const log = reporter(fileName, undefined);

    expect(reporter).toHaveReturned();
    expect(console.log).toHaveBeenCalled();

    expect(log).toContain(tickSign);
    expect(log).not.toContain(warnSign);
    expect(log).not.toContain(errSign);
  });

  it('should have multiple warnings', async () => {
    const fileName = 'file.coffee';
    const coffee = await fs.promises.readFile(fixtures(fileName), 'utf-8');

    const coffeelintConfig = {
      max_line_length: {
        name: 'max_line_length',
        value: 40,
        level: 'warn',
        limitComments: true,
      },
      no_trailing_whitespace: {
        name: 'no_trailing_whitespace',
        level: 'warn',
        allowed_in_comments: false,
        allowed_in_empty_lines: false,
      },
    };

    const result = coffeelint.lint(coffee, coffeelintConfig);
    const log = reporter(fileName, result);

    expect(reporter).toHaveReturned();
    expect(console.log).toHaveBeenCalled();

    expect(log).not.toContain(tickSign);
    expect(log).toContain(warnSign);
    expect(log).not.toContain(errSign);
  });
});

describe('windows <win32>', () => {
  const originalPlatform = process.platform;

  beforeAll(() => {
    Object.defineProperty(process, 'platform', {
      value: 'win32',
    });
  });

  afterAll(() => {
    Object.defineProperty(process, 'platform', {
      value: originalPlatform,
    });
  });

  it('the log should not contain emojis', async () => {
    const fileName = 'file.coffee';
    const coffee = await fs.promises.readFile(fixtures(fileName), 'utf-8');

    const coffeelintConfig = {
      max_line_length: {
        name: 'max_line_length',
        value: 40,
        level: 'warn',
        limitComments: true,
      },
      no_trailing_whitespace: {
        name: 'no_trailing_whitespace',
        level: 'error',
        allowed_in_comments: false,
        allowed_in_empty_lines: false,
      },
    };

    const result = coffeelint.lint(coffee, coffeelintConfig);
    const log = reporter(fileName, result);

    expect(reporter).toHaveReturned();
    expect(console.log).toHaveBeenCalled();

    expect(log).not.toContain('No Problem');
    expect(log).not.toContain(warnSign);
    expect(log).not.toContain(errSign);
    expect(log).not.toContain(tickSign);
  });
});
