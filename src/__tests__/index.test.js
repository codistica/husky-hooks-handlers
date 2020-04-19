import {getValidPackageNamesTest} from './modules/get-valid-package-names.test.js';
import {validateCommitTest} from './modules/validate-commit.test.js';
import {cleanUp, setup} from './__utils__/env.js';

before(setup); // BEWARE THAT LAZY require() WILL USE MOCKED FILE SYSTEM.

// MODULES
describe('Modules', () => {
    getValidPackageNamesTest();
    validateCommitTest();
});

after(cleanUp);
