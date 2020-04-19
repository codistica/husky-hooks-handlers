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

const optionsC = {};

function validateCommitTest() {
    describe('validateCommit()', () => {
        it('Should correctly transform all commit messages.', () => {
            assert.strictEqual(validateCommit('[NEW] - Some commit message.', optionsA), '[NEW] - Some commit message.');
            assert.strictEqual(validateCommit('[reFA  ctor] - Some     commit  message.', optionsA), '[REFACTOR] - Some commit message.');
            assert.strictEqual(validateCommit('[new1234] - Some commit message.', optionsA), '[NEW] - Some commit message.');

            assert.strictEqual(validateCommit('[new] [core] - Some commit message.', optionsB), '[NEW] [core] - Some commit message.');
            assert.strictEqual(validateCommit('[new1234] [CORE] - Some commit message.', optionsB), '[NEW] [core] - Some commit message.');
            assert.strictEqual(validateCommit('[new1234] [dev-tools ] - Some commit message.', optionsB), '[NEW] [dev-tools] - Some commit message.');
            assert.strictEqual(validateCommit('[new1234] [dev-tools ] - Another-special (very special!) commit message.', optionsB), '[NEW] [dev-tools] - Another-special (very special!) commit message.');

            assert.strictEqual(validateCommit('Some commit     message.'), 'Some commit message.');
        });
        it('Should throw errors accordingly.', () => {
            assert.throws(validateCommit.bind(null, null, optionsA), TypeError, 'INVALID INPUT TYPE.');
            assert.throws(validateCommit.bind(null, '[NEW]', optionsA), SyntaxError, 'NO DESCRIPTION FOUND.');
            assert.throws(validateCommit.bind(null, '[NEW] -', optionsA), SyntaxError, 'DESCRIPTION CANNOT BE EMPTY.');
            assert.throws(validateCommit.bind(null, '[NEW] - my description', optionsA), SyntaxError, 'DESCRIPTION MUST BE START WITH AN UPPERCASE LETTER AND END WITH A PERIOD.');
            assert.throws(validateCommit.bind(null, '- Some commit message.', optionsA), SyntaxError, 'NO TYPE TAG FOUND.');
            assert.throws(validateCommit.bind(null, '[wrong-type] - Some commit message.', optionsA), SyntaxError, 'INVALID TYPE.');

            assert.throws(validateCommit.bind(null, '[NEW] [wrong-name] - Some commit message.', optionsB), SyntaxError, 'INVALID PACKAGE NAME.');
            assert.throws(validateCommit.bind(null, '[NEW] - Some commit message.', optionsB), SyntaxError, 'NO PACKAGE NAME TAG FOUND.');
            assert.throws(validateCommit.bind(null, '[POLISH] [dev-tools] - Some very long and rude commit message that should definitely do not pass this test.', optionsB), SyntaxError, 'COMMIT MAX LENGTH IS 72.');

            assert.throws(validateCommit.bind(null, 'my description', optionsC), SyntaxError, 'DESCRIPTION MUST BE START WITH AN UPPERCASE LETTER AND END WITH A PERIOD.');
        });
    });
}

export {validateCommitTest};
