import {getMetadataBlocks} from './get-metadata-blocks.js';
import {validateTag} from './validate-tag.js';
import {validatePackageName} from './validate-package-names.js';
import {getDescription} from './get-description.js';

/**
 * @description Parses commit message.
 * @param {string} str - Input string.
 * @returns {{tag: string, packageName: string, description: string}} Parsed commit message.
 */
function parseCommitMessage(str) {
    const metadataBlocks = getMetadataBlocks(str);
    return {
        tag: validateTag(metadataBlocks[0]),
        packageName: validatePackageName(metadataBlocks[1]),
        description: getDescription(str)
    };
}

export {parseCommitMessage};
