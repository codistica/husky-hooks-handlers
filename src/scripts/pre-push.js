import {runCmd} from '../modules/run-cmd.js';

(async () => {
    await runCmd('yarn run prettify');
    await runCmd('yarn run test:quick');
})();
