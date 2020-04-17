import {readFile, writeFile} from 'fs';
import {validateCommitMessage} from './internals/validate-commit-message.js';
import {getValidPackageNames} from './internals/get-valid-package-names.js';
import {VALID_PACKAGE_NAMES} from '../config.js';

const commitMsgFile = process.env.HUSKY_GIT_PARAMS;

(async () => {
    const commitMsg = await new Promise((resolve, reject) => {
        readFile(commitMsgFile, 'utf8', (err, commitMsg) => {
            if (err) {
                reject(err);
            }
            resolve(commitMsg);
        });
    });

    if (process.argv[3]) {
        (await getValidPackageNames(process.argv[3])).forEach((packageName) => VALID_PACKAGE_NAMES.push(packageName));
    }

    await new Promise((resolve, reject) => {
        writeFile(commitMsgFile, validateCommitMessage(commitMsg), (err) => {
            if (err) {
                reject(err);
            }
            resolve();
        });
    });
})();
