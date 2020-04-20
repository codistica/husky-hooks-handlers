import {assert} from "chai";
import {relative, resolve} from 'path';
import {runCmd} from '../../modules/run-cmd.js';

const scriptPath = relative(process.cwd(), resolve(__dirname, '../../scripts/commit-msg.js'));

function commitMsgTest() {
    describe('commit-msg', () => {
        it('Process should end with a non 0 exit code.', (done) => {
            runCmd('node ' + scriptPath + ' commit-msg', {stdioIgnore: true}).then(() => {
                done(new Error('REJECTION EXPECTED.'));
            }).catch((err) => {
                assert.isDefined(err);
                done();
            }).catch(done);
        });
    });
}

export {commitMsgTest};
