import { Calendar, FolderKanban, Wrench } from 'lucide-react';
import { useEffect, useState } from 'react';
import useInView from '../../hooks/useInView';

const STAT_ICONS = {
    projects: FolderKanban,
    experience: Calendar,
    tools: Wrench,
};

const prefersReducedMotion = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Counts 0 → target once `run` flips true. It still counts under reduced
 * motion — a number frozen at its final value reads as broken — just quicker,
 * and nothing moves on screen while it ticks.
 */
function useCountUp(target, run) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!run) return;

        let frame;
        let started;
        const DURATION = prefersReducedMotion() ? 350 : 1100;

        const tick = (now) => {
            if (started === undefined) started = now;
            const p = Math.min(1, (now - started) / DURATION);
            setValue(Math.round(target * (1 - (1 - p) ** 3))); // easeOutCubic
            if (p < 1) frame = requestAnimationFrame(tick);
        };

        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [target, run]);

    return value;
}

function Stat({ item, run }) {
    const Icon = STAT_ICONS[item.icon] || FolderKanban;

    // "20+" -> counts 20 then re-appends the "+"; non-numeric values render as-is
    const parsed = /^(\d+)(.*)$/.exec(item.value);
    const counted = useCountUp(parsed ? Number(parsed[1]) : 0, run && Boolean(parsed));
    const display = parsed ? `${counted}${parsed[2]}` : item.value;

    return (
        <div className='flex items-center gap-3 px-4 py-3'>
            <span className='flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-hairline bg-tile text-accent'>
                <Icon size={20} />
            </span>

            <div>
                <p className='text-2xl font-bold leading-none tabular-nums text-heading'>{display}</p>
                <p className='mt-1.5 max-w-[7rem] text-xs leading-4 text-muted'>{item.label}</p>
            </div>
        </div>
    );
}

export default function StatGrid({ stats = [], className = '' }) {
    const { ref, inView } = useInView({ rootMargin: '0px' });

    if (!stats.length) return null;

    return (
        <div
            ref={ref}
            className={`grid max-w-xl grid-cols-1 divide-y divide-hairline rounded-2xl border border-line bg-card px-2 py-4 backdrop-blur sm:grid-cols-3 sm:divide-x sm:divide-y-0 ${className}`}>
            {stats.map((item) => (
                <Stat
                    key={item.label}
                    item={item}
                    run={inView}
                />
            ))}
        </div>
    );
}
