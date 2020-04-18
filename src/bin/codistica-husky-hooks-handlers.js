#!/usr/bin/env node

'use strict';

(async () => {
    const scriptName = process.argv[2];

    switch (scriptName) {
        case 'commit-msg':
            await import('../scripts/commit-msg.js');
            break;

        case 'pre-commit':
            await import('../scripts/pre-commit.js');
            break;

        case 'pre-push':
            await import('../scripts/pre-push.js');
            break;

        default:
    }
})();
