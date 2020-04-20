import {getValidPackageNamesTest} from './modules/get-valid-package-names.test.js';
import {validateCommitTest} from './modules/validate-commit.test.js';
import {commitMsgTest} from './scripts/commit-msg.test.js';
import {preCommitTest} from './scripts/pre-commit.test.js';
import {prePushTest} from './scripts/pre-push.test.js';
import {cleanUp, setup} from './__utils__/env.js';

before(setup); // BEWARE THAT LAZY require() WILL USE MOCKED FILE SYSTEM.

// MODULES
describe('Modules', () => {
    getValidPackageNamesTest();
    validateCommitTest();
});

// SCRIPTS
describe('Scripts', () => {
    commitMsgTest();
    preCommitTest();
    prePushTest();
});

after(cleanUp);
