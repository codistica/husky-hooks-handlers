import {prettifySpaces} from './prettify-spaces.js';
import {checkLength} from './check-length.js';
import {parseCommitMessage} from './parse-commit-message.js';
import {VALID_PACKAGE_NAMES} from '../../config.js';

/**
 * @description Validates commit message.
 * @param {string} commitMsg - Input string.
 * @returns {string} Validated commit message or null.
 * @throws {SyntaxError} If invalid commit message.
 */
function validateCommitMessage(commitMsg) {
    if (typeof commitMsg !== 'string') {
        throw new TypeError('INVALID INPUT.');
    }

    const parsedCommitMsg = parseCommitMessage(prettifySpaces(commitMsg));

    let finalCommitMsg = parsedCommitMsg.tag;

    if (VALID_PACKAGE_NAMES.length) {
        finalCommitMsg += ' ' + parsedCommitMsg.packageName;
    }

    finalCommitMsg += ' ' + parsedCommitMsg.description;

    checkLength(finalCommitMsg);

    return finalCommitMsg;
}

export {validateCommitMessage};
