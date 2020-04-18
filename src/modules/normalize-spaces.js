/**
 * @description Remove unnecessary spaces.
 * @param {string} str - Input string.
 * @returns {string} Processed string.
 */
function normalizeSpaces(str) {
    return str.replace(/\s+/g, ' ').replace(/(?:^\s)|(?:\s$)|/g, '');
}

export {normalizeSpaces};
