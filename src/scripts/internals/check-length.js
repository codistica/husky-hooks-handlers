import {MAX_COMMIT_LENGTH} from '../../config.js';

/**
 * @description Checks commit length.
 * @param {string} str - Input string.
 * @returns {boolean} Check result.
 * @throws {SyntaxError} If invalid commit length.
 */
function checkLength(str) {
    if (str.length >= MAX_COMMIT_LENGTH) {
        throw new SyntaxError('COMMIT MAX LENGTH IS ' + MAX_COMMIT_LENGTH);
    }
    return true;
}

export {checkLength};
