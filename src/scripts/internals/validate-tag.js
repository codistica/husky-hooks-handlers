import {VALID_TAGS} from '../../config.js';

/**
 * @description Get valid tag from input string.
 * @param {string} str - Input string.
 * @returns {string} Found valid tag.
 * @throws {SyntaxError} If invalid tag.
 */
function validateTag(str) {
    const tag = str.replace(/[^A-z\][]/g, '').toUpperCase();
    if (VALID_TAGS.some((currentTag) => currentTag === tag)) {
        return tag;
    } else {
        throw new SyntaxError('INVALID TAG.');
    }
}

export {validateTag};
