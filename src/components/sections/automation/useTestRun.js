import { useEffect, useRef, useState } from 'react';

/** Delay between two terminal lines. Tune the run speed here. */
const STEP_MS = 420;
const STEP_MS_REDUCED = 90;

const prefersReducedMotion = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ============================================================================
 * AUTOMATION — SIMULATED TEST RUN
 * Reveals `lineCount` terminal lines one by one, then the summary line.
 *
 * It always steps through the run — a Re-run button that no-ops is broken, so
 * reduced motion only shortens the interval (the per-line slide is dropped via
 * motion-reduce:animate-none on the lines themselves).
 * ==========================================================================*/

export default function useTestRun(lineCount) {
    const total = lineCount + 1; // + summary line

    const [revealed, setRevealed] = useState(total); // start showing the finished run
    const [running, setRunning] = useState(false);
    const timers = useRef([]);

    const clearTimers = () => {
        timers.current.forEach(clearTimeout);
        timers.current = [];
    };

    // drop any pending timers when the section unmounts
    useEffect(() => clearTimers, []);

    const start = () => {
        clearTimers();
        setRunning(true);
        setRevealed(0);

        const step = prefersReducedMotion() ? STEP_MS_REDUCED : STEP_MS;

        for (let i = 1; i <= total; i++) {
            timers.current.push(
                setTimeout(() => {
                    setRevealed(i);
                    if (i === total) setRunning(false);
                }, i * step),
            );
        }
    };

    return { revealed, running, total, start, isFinished: revealed >= total };
}
