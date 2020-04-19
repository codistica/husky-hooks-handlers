/**
 * @description Get commit tags.
 * @param {string} input - Input string.
 * @returns {Array<string>} Found tags array.
 */
function getCommitTags(input) {
    const tags = input.match(/\[[^\]]+]/g);
    return tags || [];
}

export {getCommitTags};
