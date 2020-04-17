/**
 * @description Get commit message metadata blocks.
 * @param {string} str - Input string.
 * @returns {Array<string>} Found metadata blocks array.
 * @throws {SyntaxError} If invalid metadata tags.
 */
function getMetadataBlocks(str) {
    const metadataStr = (str.match(/.+]\s*-/g) || [])[0];
    const metadataBlocks = metadataStr && metadataStr.match(/\[[^\]]+]/g);
    if (!metadataBlocks) {
        throw new SyntaxError('INVALID METADATA.');
    } else if (metadataBlocks.length !== 2) {
        throw new SyntaxError('INVALID METADATA BLOCKS NUMBER.');
    }
    return metadataBlocks;
}

export {getMetadataBlocks};
