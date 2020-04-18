/**
 * @description Get commit tags.
 * @param {string} input - Input string.
 * @returns {Array<string>} Found tags array.
 * @throws {SyntaxError} If no tags found.
 */
function getCommitTags(input) {
    const tagSection = (input.match(/.+]\s*-/g) || [])[0];
    const tags = tagSection && tagSection.match(/\[[^\]]+]/g);
    if (!tags) {
        throw new SyntaxError('NO TAGS FOUND');
    }
    return tags;
}

export {getCommitTags};
