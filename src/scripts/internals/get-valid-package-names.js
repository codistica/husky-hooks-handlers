import {readdir} from 'fs';
import {resolve, isAbsolute} from "path";

/**
 * @async
 * @description Get package names from packages directory.
 * @param {string} [packagesDirectory='./packages'] - Packages directory path.
 * @returns {Promise<Array<string>>} Promise. Found valid package names array.
 */
async function getValidPackageNames(packagesDirectory) {
    const validPackageNames = ['[*]'];
    packagesDirectory = typeof packagesDirectory === 'string' ? packagesDirectory : './packages';
    packagesDirectory = isAbsolute(packagesDirectory) ? packagesDirectory : resolve(process.cwd(), packagesDirectory);
    await new Promise((resolve, reject) => {
        readdir(packagesDirectory, (err, dirContent) => {
            if (err) {
                reject(err);
            }
            dirContent.forEach((name) => {
                const str = '[' + name.replace(/^[^-]+-/, '') + ']';
                validPackageNames.push(str);
            });
            resolve();
        });
    });
    return validPackageNames;
}

export {getValidPackageNames};
