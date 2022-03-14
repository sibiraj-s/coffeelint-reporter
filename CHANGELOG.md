# CHANGELOG

All notable changes to this project will be documented in this file.

> **Tags**
>
> - Features
> - Bug Fixes
> - Performance Improvements
> - Dependency Updates
> - Breaking Changes
> - Documentation
> - Enhancements
> - Internal

## v3.0.0 (2022-03-14)

#### Enhancements

- replace chalk with picocolors ([82fca7c](https://github.com/sibiraj-s/coffeelint-reporter/commit/82fca7c))
- replace cli-table3 with columnify ([437a8f8](https://github.com/sibiraj-s/coffeelint-reporter/commit/437a8f8))

## v2.0.3 (2020-12-13)

#### Internal

- update LICENSE ([9d45142](https://github.com/sibiraj-s/coffeelint-reporter/commit/9d45142))

## v2.0.2 (2020-04-14)

#### Enhancements

- use `@coffeelint/cli` instead of `coffeelint` ([88bf44c](https://github.com/sibiraj-s/coffeelint-reporter/commit/88bf44c))

#### Dependency Updates

- bump devDependencies ([36b581d](https://github.com/sibiraj-s/coffeelint-reporter/commit/36b581d))

## v2.0.1 (2019-12-13)

#### Enhancements

- Remove errors and warnings count in log ([30f418f](https://github.com/sibiraj-s/coffeelint-reporter/commit/30f418f))

## v2.0.0 (2019-12-12)

#### Internal

- add jest unit tests ([149f2d1](https://github.com/sibiraj-s/coffeelint-reporter/commit/149f2d1))
- migrate to github actions from travis-ci ([d6ad1ce](https://github.com/sibiraj-s/coffeelint-reporter/commit/d6ad1ce))

#### Dependency Updates

- bump devDependencies ([0eaba00](https://github.com/sibiraj-s/coffeelint-reporter/commit/0eaba00))

#### Breaking Changes

From

```js
require('coffeelint-reporter').reporter;
```

To

```js
require('coffeelint-reporter/reporter');
```

## v1.0.6 (2019-09-01)

#### Dependency Updates

- update chalk to v2.4.2 ([c6e8625](https://github.com/sibiraj-s/coffeelint-reporter/commit/c6e8625))
- update eslint to v6.3.0 ([8b3bb2a](https://github.com/sibiraj-s/coffeelint-reporter/commit/8b3bb2a))
- update eslint-config-standard to v14.1.0 ([8b3bb2a](https://github.com/sibiraj-s/coffeelint-reporter/commit/8b3bb2a))
- update eslint-plugin-node to v9.2.0 ([8b3bb2a](https://github.com/sibiraj-s/coffeelint-reporter/commit/8b3bb2a))
- update eslint-plugin-import to v2.18.2 ([c6e8625](https://github.com/sibiraj-s/coffeelint-reporter/commit/c6e8625))
- update eslint-plugin-promise to v4.2.1 ([c6e8625](https://github.com/sibiraj-s/coffeelint-reporter/commit/c6e8625))
- update eslint-plugin-standard to v4.0.1 ([c6e8625](https://github.com/sibiraj-s/coffeelint-reporter/commit/c6e8625))
- update husky to v3.0.5 ([81fc115](https://github.com/sibiraj-s/coffeelint-reporter/commit/81fc115))

#### Internal

- remove grunt-eslint in favour of eslint cli ([dfb01be](https://github.com/sibiraj-s/coffeelint-reporter/commit/dfb01be))
- update LICENSE ([ee24cf6](https://github.com/sibiraj-s/coffeelint-reporter/commit/ee24cf6))
- update eslint rules ([c6e8625](https://github.com/sibiraj-s/coffeelint-reporter/commit/c6e8625))

## v1.0.5 (2018-10-05)

#### Dependency Updates

- update eslint to v5.6.1 ([0a3be13](https://github.com/sibiraj-s/coffeelint-reporter/commit/0a3be13))
- update eslint-plugin-promise to v4.0.1 ([0a3be13](https://github.com/sibiraj-s/coffeelint-reporter/commit/0a3be13))
- update husky to v1.1.0 ([0a3be13](https://github.com/sibiraj-s/coffeelint-reporter/commit/0a3be13))

#### Internal

- remove vscode settings in favour of editorconfig ([167d21a](https://github.com/sibiraj-s/coffeelint-reporter/commit/167d21a))
- update github username ([ffe96c0](https://github.com/sibiraj-s/coffeelint-reporter/commit/ffe96c0))

## v1.0.4 (2018-08-29)

#### Internal

- add eslint to lint javascript files
- apply standardJS rules to eslint and code cleanup ([0bf10da](https://github.com/sibiraj-s/coffeelint-reporter/commit/0bf10da))

## v1.0.3 (2018-07-27)

#### Bug Fixes

- fix a typo in `'use strict';` statement ([11033f7](https://github.com/sibiraj-s/coffeelint-reporter/commit/11033f7))

## v1.0.2 (2018-07-26)

Just a Maintenance Patch

#### Internal

- use grunt to lint before commit ([3f4e25c](https://github.com/sibiraj-s/coffeelint-reporter/commit/3f4e25c))
- add travis test ([3f4e25c](https://github.com/sibiraj-s/coffeelint-reporter/commit/3f4e25c))
- remove trivial details from package.json ([3f4e25c](https://github.com/sibiraj-s/coffeelint-reporter/commit/3f4e25c))

## v1.0.1 (2018-07-25)

#### Bug Fixes

- export `reporter` for runtime api ([1990db1](https://github.com/sibiraj-s/coffeelint-reporter/commit/1990db1))

## v1.0.0 (2018-07-25)

Initial Release.
Reporter for Coffeelint
