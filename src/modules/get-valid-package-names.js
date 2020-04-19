import {readdir} from 'fs';
import {resolve, isAbsolute} from "path";

/**
 * @async
 * @description Get package names from packages directory.
 * @param {string} [packagesDirectory='./packages'] - Packages directory path.
 * @returns {Promise<(Array<string>|null)>} Promise. Found valid package names array or null.
 */
async function getValidPackageNames(packagesDirectory) {
    let validPackageNames = ['[*]'];

    packagesDirectory = typeof packagesDirectory === 'string' ? packagesDirectory : './packages';
    packagesDirectory = isAbsolute(packagesDirectory) ? packagesDirectory : resolve(process.cwd(), packagesDirectory);

    await new Promise((resolve, reject) => {
        readdir(packagesDirectory, (err, dirContent) => {
            if (err) {
                reject(err);
            }
            dirContent && dirContent.forEach((name) => {
                const str = '[' + name.replace(/^[^-]+-/, '').toLowerCase() + ']';
                validPackageNames.push(str);
            });
            resolve();
        });
    }).catch(() => {
        return validPackageNames = null;
    });

    return validPackageNames;
}

export {getValidPackageNames};
