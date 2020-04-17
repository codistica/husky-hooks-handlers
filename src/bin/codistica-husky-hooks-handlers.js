#!/usr/bin/env node

'use strict';

(async () => {
    const scriptName = process.argv[2];

    switch (scriptName) {
        case 'commit-msg':
            import('../scripts/commit-msg.js');
            break;

        case 'pre-commit':
            import('../scripts/pre-commit.js');
            break;

        case 'pre-push':
            import('../scripts/pre-push.js');
            break;

        default:
    }
})();
