import CodeBlock from '../../common/CodeBlock';
import EditorTabs from './EditorTabs';
import TerminalBar from './TerminalBar';
import TerminalOutput from './TerminalOutput';

/* ============================================================================
 * AUTOMATION — RIGHT CARD (editor + terminal)
 * A fake IDE window: tab strip → highlighted code → terminal toolbar → output.
 * Run state comes from the section (useTestRun) so the sr-only live region can
 * announce it too.
 * ==========================================================================*/

export default function EditorPanel({ suite, openFile, onOpen, run }) {
    return (
        <div className='overflow-hidden rounded-3xl border border-line bg-card p-1.5'>
            <div className='overflow-hidden rounded-[1.15rem] border border-hairline bg-code'>
                <EditorTabs
                    files={suite.files}
                    openId={openFile.id}
                    onOpen={onOpen}
                />

                {/* key remounts CodeBlock so the swap animation replays per file */}
                <CodeBlock
                    key={openFile.id}
                    code={openFile.code}
                    lang={openFile.lang}
                    className='h-[13rem] animate-[detail-in_0.3s_ease-out] p-3 motion-reduce:animate-none sm:h-[15rem]'
                />

                <TerminalBar
                    running={run.running}
                    isFinished={run.isFinished}
                    onRun={run.start}
                />

                <TerminalOutput
                    command={suite.command}
                    lines={suite.run}
                    summary={suite.summary}
                    revealed={run.revealed}
                    running={run.running}
                />
            </div>
        </div>
    );
}
