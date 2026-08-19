/* ============================================================================
 * AUTOMATION — TERMINAL OUTPUT
 * Prints the command, then the first `revealed` run lines, then the summary
 * once every line is out. The caret only shows while a run is in flight.
 * ==========================================================================*/

export default function TerminalOutput({ command, lines, summary, revealed, running }) {
    return (
        <div className='h-[9.5rem] overflow-auto p-3 font-mono text-[11px] leading-5 sm:leading-6'>
            <p className='text-muted'>
                <span className='text-accent'>$</span> {command}
            </p>

            {lines.slice(0, revealed).map((line, i) => (
                <p
                    key={line.text}
                    style={{ animationDelay: `${i * 40}ms` }}
                    className='animate-[term-in_0.25s_ease-out_both] motion-reduce:animate-none'>
                    <span className={line.ok ? 'text-term-pass' : 'text-term-fail'}>{line.ok ? '✓' : '✕'}</span> <span className='text-body'>{line.text}</span>{' '}
                    <span className='text-gutter'>({line.time})</span>
                </p>
            ))}

            {/* summary sits one step past the last line */}
            {revealed > lines.length && (
                <p className='mt-2 animate-[term-in_0.25s_ease-out_both] motion-reduce:animate-none'>
                    <span className='text-term-pass'>{summary.passed} passed</span>
                    <span className='text-gutter'>, </span>
                    <span className={summary.failed ? 'text-term-fail' : 'text-gutter'}>{summary.failed} failed</span> <span className='text-gutter'>({summary.time})</span>
                </p>
            )}

            {running && (
                <span
                    aria-hidden='true'
                    className='inline-block h-3.5 w-1.5 animate-[caret_1s_step-end_infinite] bg-accent align-middle'
                />
            )}
        </div>
    );
}
