/**
 * @description Validates package name from input string.
 * @param {string} input - Input string.
 * @param {Array<string>} validPackageNames - Valid package names array.
 * @returns {string} Found valid package name.
 * @throws {SyntaxError} If invalid package name.
 */
function validateCommitPackageNameTag(input, validPackageNames) {
    const foundName = input.replace(/[^\-*A-z\][]/g, '').toLowerCase();
    if (validPackageNames.some((currentName) => currentName === foundName)) {
        return foundName;
    }
    throw new SyntaxError('INVALID PACKAGE NAME.');
}

export {validateCommitPackageNameTag};
