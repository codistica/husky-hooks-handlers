import {normalizeSpaces} from './normalize-spaces.js';
import {getCommitTags} from './get-commit-tags.js';
import {getCommitDescription} from './get-commit-description.js';

/**
 * @description Parses commit message.
 * @param {string} commitMsg - Input string.
 * @returns {{tags: Array<string>, description: string}} Parsed commit message.
 */
function parseCommit(commitMsg) {
    const normalizedStr = normalizeSpaces(commitMsg);
    return {
        tags: getCommitTags(normalizedStr),
        description: getCommitDescription(normalizedStr)
    }
}

export {parseCommit};
