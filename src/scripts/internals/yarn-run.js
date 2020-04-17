import {spawn} from 'child_process';

/**
 * @async
 * @description Programmatically run yarn scripts from current working directory.
 * @param {string} scriptName - Yarn script to be ran.
 * @returns {Promise<void>} Promise. Void.
 */
async function yarnRun(scriptName) {
    const yarnTestQuickExec = {
        cmd: 'yarn',
        args: ['run', scriptName]
    };
    await new Promise((resolve, reject) => {
        spawn(yarnTestQuickExec.cmd, yarnTestQuickExec.args, {
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

export {yarnRun};
