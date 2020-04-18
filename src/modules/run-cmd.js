import {spawn} from 'child_process';

/**
 * @async
 * @description Programmatically run commands from current working directory.
 * @param {string} cmd - Command string to be ran.
 * @returns {Promise<void>} Promise. Void.
 */
async function runCmd(cmd) {
    const cmdArr = cmd.split(' ');
    const cmdObj = {
        cmd: cmdArr[0],
        args: cmdArr.slice(1)
    };
    await new Promise((resolve, reject) => {
        spawn(cmdObj.cmd, cmdObj.args, {
            cwd: process.cwd(),
            stdio: ['inherit', 'inherit', 'inherit'],
            shell: process.platform === 'win32'
        }).on('exit', (exitCode) => {
            if (exitCode !== 0) {
                reject(new Error('SCRIPT EXECUTION FAILED'));
            }
            resolve();
        });
    });
}

export {runCmd};
