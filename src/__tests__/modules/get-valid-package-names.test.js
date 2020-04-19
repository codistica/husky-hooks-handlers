import {assert} from "chai";
import {getValidPackageNames} from '../../modules/get-valid-package-names.js';
import {resolve} from 'path';

function getValidPackageNamesTest() {
    describe('getValidPackageNames()', () => {
        it('Should return found tags array from indicated packages directory.', async () => {
            assert.sameOrderedMembers(await getValidPackageNames('./get-valid-package-names/packages'), ['[*]', '[core]', '[dev-tools]']);
            assert.sameOrderedMembers(await getValidPackageNames(resolve(process.cwd(), './get-valid-package-names/packages')), ['[*]', '[core]', '[dev-tools]']);
        });
        it('Should return null on error.', async () => {
            assert.isNull(await getValidPackageNames('./some-random-path'));
            assert.isNull(await getValidPackageNames());
        });
    });
}

export {getValidPackageNamesTest};
