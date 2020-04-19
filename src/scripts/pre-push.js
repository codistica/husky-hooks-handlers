import {runCmd} from '../modules/run-cmd.js';

const scripts = process.argv.slice(3);

(async () => {
    for (const script of scripts) {
        await runCmd('yarn run ' + script);
    }
})();
