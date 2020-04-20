import {spawn} from 'child_process';

/**
 * @typedef runCmdOptionsType
 * @property {boolean} [stdioIgnore=false] - Ignore stdin, stdout and stderr of spawned process.
 */

/**
 * @async
 * @description Programmatically run commands from current working directory.
 * @param {string} cmd - Command string to be ran.
 * @param {runCmdOptionsType} [options] - Options.
 * @returns {Promise<void>} Promise. Void.
 */
async function runCmd(cmd, options) {
    const cmdArr = cmd.split(' ');
    const cmdObj = {
        cmd: cmdArr[0],
        args: cmdArr.slice(1)
    };

    if (!options) {
        options = {
            stdioIgnore: false
        }
    } else {
        options.stdioIgnore = typeof options.stdioIgnore === 'boolean' ? options.stdioIgnore : false;
    }

    await new Promise((resolve, reject) => {
        spawn(cmdObj.cmd, cmdObj.args, {
            cwd: process.cwd(),
            stdio: options.stdioIgnore ? ['ignore', 'ignore', 'ignore'] : ['inherit', 'inherit', 'inherit'],
            shell: process.platform === 'win32'
        }).on('exit', (exitCode) => {
            if (exitCode !== 0) {
                reject(new Error('PROCESS ENDED WITH A NON 0 EXIT CODE.'));
            }
            resolve();
        });
    });
}

export {runCmd};
