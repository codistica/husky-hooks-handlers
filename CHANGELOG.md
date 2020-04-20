# Change Log

All notable changes to this project will be documented in this file.

This project adheres to [Semantic Versioning](https://semver.org).

This change log adheres to standards from [Keep a CHANGELOG](https://keepachangelog.com).

## [Unreleased]

## [1.0.1] - 2020-04-20

### Added
- This change log.
- Tests for scripts correct exiting.
- Option for ignoring stdio of child processes in run-cmd module.

### Fixed
- Scripts always exiting with 0 exit code despite of errors being thrown.
Unhandled promises rejections does not makes exit code change to 1.

## Earlier releases (1.0.0 and younger)
See [GitHub release notes](https://github.com/codistica/husky-hooks-handlers/releases?after=v1.0.1)
for info on changes for earlier releases.

[Unreleased]: https://github.com/codistica/husky-hooks-handlers/compare/v1.0.1...HEAD
[1.0.1]: https://github.com/codistica/husky-hooks-handlers/compare/v1.0.0...v1.0.1
