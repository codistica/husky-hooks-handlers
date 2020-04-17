import {VALID_PACKAGE_NAMES} from '../../config.js';

/**
 * @description Get valid package name from input string.
 * @param {string} str - Input string.
 * @returns {string} Found valid package name.
 * @throws {SyntaxError} If invalid package name.
 */
function validatePackageName(str) {
    const tag = str.replace(/[^\-*A-z\][]/g, '').toLowerCase();
    if (VALID_PACKAGE_NAMES.some((currentTag) => currentTag === tag)) {
        return tag;
    }
    throw new SyntaxError('INVALID PACKAGE NAME.');
}

export {validatePackageName};
