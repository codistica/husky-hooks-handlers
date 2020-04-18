import {parseCommit} from './parse-commit.js';
import {validateCommitTypeTag} from './validate-commit-type-tag.js';
import {validateCommitPackageNameTag} from './validate-commit-package-name-tag.js';

/**
 * @typedef validateCommitMessageOptionsType
 * @property {number} [maxLength=72] - Commit max length.
 * @property {Array<string>} validTypes - Valid tags array.
 * @property {Array<string>} [validPackageNames=[]] - Valid package name array.
 */

/**
 * @description Validates commit message.
 * @param {string} commitMsg - Input string.
 * @param {validateCommitMessageOptionsType} options - Validation options.
 * @returns {string} Validated commit message.
 * @throws {TypeError} If invalid input.
 * @throws {SyntaxError} If no package name tag is found.
 * @throws {SyntaxError} If invalid commit length.
 */
function validateCommit(commitMsg, options) {
    if (typeof commitMsg !== 'string') {
        throw new TypeError('INVALID INPUT TYPE');
    }

    if (options) {
        options.maxLength = typeof options.maxLength === 'number' ? options.maxLength : 72;
        options.validTypes = Array.isArray(options.validTypes) ? options.validTypes : [];
        options.validPackageNames = Array.isArray(options.validPackageNames) ? options.validPackageNames : [];
    } else {
        options = {
            maxLength: 72,
            validTypes: [],
            validPackageNames: []
        }
    }

    const parsedCommitMsg = parseCommit(commitMsg);

    let finalCommitMsg = validateCommitTypeTag(parsedCommitMsg.tags[0], options.validTypes);

    if (options.validPackageNames.length) {
        if (!parsedCommitMsg.tags[1]) {
            throw new SyntaxError('NO PACKAGE NAME TAG FOUND');
        }
        finalCommitMsg += ' ' + validateCommitPackageNameTag(parsedCommitMsg.tags[1], options.validPackageNames);
    }

    finalCommitMsg += ' ' + parsedCommitMsg.description;

    if (finalCommitMsg.length >= options.maxLength) {
        throw new SyntaxError('COMMIT MAX LENGTH IS ' + options.maxLength);
    }

    return finalCommitMsg;
}

export {validateCommit};
