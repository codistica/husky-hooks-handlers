import {yarnRun} from './internals/yarn-run.js';

(async () => {
    await yarnRun('prettify');
    await yarnRun('test:quick');
})();
