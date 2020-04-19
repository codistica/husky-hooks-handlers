/**
 * @description Validates type from input string.
 * @param {string} input - Input string.
 * @param {Array<string>} validTypes - Valid types array.
 * @returns {string} Found valid type.
 * @throws {SyntaxError} If invalid type.
 */
function validateCommitTypeTag(input, validTypes) {
    const foundType = input.replace(/[^A-z\][]/g, '').toUpperCase();
    if (validTypes.some((currentTag) => currentTag === foundType)) {
        return foundType;
    } else {
        throw new SyntaxError('INVALID TYPE.');
    }
}

export {validateCommitTypeTag};
