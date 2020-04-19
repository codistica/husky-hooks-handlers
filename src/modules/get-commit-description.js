/**
 * @description Get commit message description section.
 * @param {string} str - Input string.
 * @returns {string} Found description section.
 * @throws {SyntaxError} If no description found.
 * @throws {SyntaxError} If empty description found.
 * @throws {SyntaxError} If invalid description found.
 */
function getCommitDescription(str) {
    const description = (str.match(/[^\[\]]+$/) || [])[0] || null;

    if (!description) {
        throw new SyntaxError('NO DESCRIPTION FOUND.');
    }

    const descriptionText = description.replace(/^\s*-\s*/, '');

    if (!descriptionText.length) {
        throw new SyntaxError(
            'DESCRIPTION CANNOT BE EMPTY.'
        );
    }

    if (!/^[A-Z]/.test(descriptionText) || !descriptionText.endsWith('.')) {
        throw new SyntaxError(
            'DESCRIPTION MUST BE START WITH AN UPPERCASE LETTER AND END WITH A PERIOD.'
        );
    }

    return descriptionText.trim();
}

export {getCommitDescription};
