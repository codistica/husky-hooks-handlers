import {default as mockFs} from 'mock-fs';

function setup() {
    mockFs({
        './get-valid-package-names/packages': {
            'scope-core': {},
            'scope-dev-tools': {}
        }
    }, {
        createCwd: true,
        createTmp: false
    })
}

function cleanUp() {
    mockFs.restore();
}

export {cleanUp, setup};
