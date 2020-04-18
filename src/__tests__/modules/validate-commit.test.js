import {assert} from "chai";
import {validateCommit} from '../../modules/validate-commit.js';

const VALID_TYPES = [
    '[DOCS]',
    '[FIX]',
    '[MERGE]',
    '[NEW]',
    '[POLISH]',
    '[REFACTOR]',
    '[TESTS]'
];

const optionsA = {
    validTypes: VALID_TYPES
};

const optionsB = {
    validTypes: VALID_TYPES,
    validPackageNames: [
        '[core]',
        '[dev-tools]',
        '[node]'
    ]
};

function validateCommitTest() {
    describe('validateCommit()', () => {
        it('Should correctly validate all commit messages.', () => {
            assert.strictEqual(validateCommit('[NEW] - Some commit message.', optionsA), '[NEW] - Some commit message.');
            assert.strictEqual(validateCommit('[reFA  ctor] - Some     commit  message.', optionsA), '[REFACTOR] - Some commit message.');
            assert.strictEqual(validateCommit('[new1234] - Some commit message.', optionsA), '[NEW] - Some commit message.');
            assert.strictEqual(validateCommit('[new] [core] - Some commit message.', optionsB), '[NEW] [core] - Some commit message.');
            assert.strictEqual(validateCommit('[new1234] [CORE] - Some commit message.', optionsB), '[NEW] [core] - Some commit message.');
            assert.strictEqual(validateCommit('[new1234] [dev-tools ] - Some commit message.', optionsB), '[NEW] [dev-tools] - Some commit message.');
        });
    });
}

export {validateCommitTest};
