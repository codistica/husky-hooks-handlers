import {assert} from "chai";
import {relative, resolve} from 'path';
import {runCmd} from '../../modules/run-cmd.js';

const scriptPath = relative(process.cwd(), resolve(__dirname, '../../scripts/pre-commit.js'));

function preCommitTest() {
    describe('pre-commit', () => {
        it('Process should end with a non 0 exit code.', (done) => {
            runCmd('node ' + scriptPath + ' pre-commit random-script noop-script', {stdioIgnore: true}).then(() => {
                done(new Error('REJECTION EXPECTED.'));
            }).catch((err) => {
                assert.isDefined(err);
                done();
            }).catch(done);
        });
    });
}

export {preCommitTest};
