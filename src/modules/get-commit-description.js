/**
 * @description Get commit message description section.
 * @param {string} str - Input string.
 * @returns {string} Found description section.
 * @throws {SyntaxError} If no description found.
 * @throws {SyntaxError} If invalid description found.
 */
function getCommitDescription(str) {
    let description = (str.match(/-\s.+$/) || [])[0] || null;
    if (!description) {
        throw new SyntaxError('NO DESCRIPTION FOUND');
    }
    if (!/^-\s[A-Z]/.test(description) || !description.endsWith('.')) {
        throw new SyntaxError(
            'DESCRIPTION MUST BE START WITH AN UPPERCASE LETTER AND END WITH A PERIOD'
        );
    }
    return description;
}

export {getCommitDescription};
