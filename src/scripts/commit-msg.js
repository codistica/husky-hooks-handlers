import {readFile, writeFile} from 'fs';
import {getValidPackageNames} from '../modules/get-valid-package-names.js';
import {validateCommit} from '../modules/validate-commit.js';

const COMMIT_MSG_FILE = process.env.HUSKY_GIT_PARAMS;

(async () => {

    let validPackageNames = [];

    const commit = await new Promise((resolve, reject) => {
        readFile(COMMIT_MSG_FILE, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    }).catch((err) => {
        throw err;
    });

    if (process.argv[3]) {
        validPackageNames = await getValidPackageNames(process.argv[3]);
        if (validPackageNames === null) {
            throw new Error('CANNOT READ PACKAGE NAMES.');
        }
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
            validPackageNames
        }), (err) => {
            if (err) {
                reject(err);
            }
            resolve();
        });
    }).catch((err) => {
        throw err;
    });
})();
