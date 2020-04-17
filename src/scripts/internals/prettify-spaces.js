/**
 * @description Remove unnecessary spaces.
 * @param {string} str - Input string.
 * @returns {string} Processed string.
 */
function prettifySpaces(str) {
    return str.replace(/\s+/g, ' ').replace(/(?:^\s)|(?:\s$)|/g, '');
}

export {prettifySpaces};
