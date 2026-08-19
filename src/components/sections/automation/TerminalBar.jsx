import { Loader2, Play, RotateCcw } from 'lucide-react';

/* ============================================================================
 * AUTOMATION — TERMINAL TOOLBAR
 * The Run / Running / Re-run button. Its label is derived from the run state
 * so it can never disagree with what the output pane is showing.
 * ==========================================================================*/

export default function TerminalBar({ running, isFinished, onRun }) {
    return (
        <div className='flex items-center justify-between gap-2 border-y border-hairline bg-chrome px-3 py-1.5'>
            <span className='font-mono text-[11px] font-semibold uppercase tracking-wider text-accent'>Terminal</span>

            <button
                type='button'
                onClick={onRun}
                disabled={running}
                className='inline-flex cursor-pointer items-center gap-1.5 rounded-lg bg-brand px-2.5 py-1 font-mono text-[11px] font-semibold text-on-brand transition-colors duration-200 hover:bg-accent-strong disabled:cursor-wait disabled:opacity-70'>
                {running ? (
                    <>
                        <Loader2
                            size={12}
                            className='animate-spin'
                        />
                        Running
                    </>
                ) : isFinished ? (
                    <>
                        <RotateCcw size={12} /> Re-run
                    </>
                ) : (
                    <>
                        <Play size={12} /> Run Tests
                    </>
                )}
            </button>
        </div>
    );
}
