import {assert} from "chai";
import {relative, resolve} from 'path';
import {runCmd} from '../../modules/run-cmd.js';

const scriptPath = relative(process.cwd(), resolve(__dirname, '../../scripts/pre-push.js'));

function prePushTest() {
    describe('pre-push', () => {
        it('Process should end with a non 0 exit code.', (done) => {
            runCmd('node ' + scriptPath + ' pre-push random-script noop-script', {stdioIgnore: true}).then(() => {
                done(new Error('REJECTION EXPECTED.'));
            }).catch((err) => {
                assert.isDefined(err);
                done();
            }).catch(done);
        });
    });
}

export {prePushTest};
