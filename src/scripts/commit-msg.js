import {readFile, writeFile} from 'fs';
import {getValidPackageNames} from '../modules/get-valid-package-names.js';
import {validateCommit} from '../modules/validate-commit.js';

const COMMIT_MSG_FILE = process.env.HUSKY_GIT_PARAMS;
const VALID_PACKAGE_NAMES = [];

(async () => {
    const commit = await new Promise((resolve, reject) => {
        readFile(COMMIT_MSG_FILE, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });

    if (process.argv[3]) {
        (await getValidPackageNames(process.argv[3])).forEach((packageName) => VALID_PACKAGE_NAMES.push(packageName));
    }

    await new Promise((resolve, reject) => {
        writeFile(COMMIT_MSG_FILE, validateCommit(commit, {
            maxLength: 72,
            validTypes: [
                '[DOCS]',
                '[FIX]',
                '[MERGE]',
                '[NEW]',
                '[POLISH]',
                '[REFACTOR]',
                '[TESTS]'
            ],
            validPackageNames: VALID_PACKAGE_NAMES
        }), (err) => {
            if (err) {
                reject(err);
            }
            resolve();
        });
    });
})();
