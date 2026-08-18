import { Calendar, FolderKanban, Wrench } from 'lucide-react';

const STAT_ICONS = {
    projects: FolderKanban,
    experience: Calendar,
    tools: Wrench,
};

/**
 * stats: [{ value, label, icon? }]
 *
 * variant:
 *   'cards' (default) — original 2-column card grid. Unchanged from before,
 *                       so existing call sites keep working untouched.
 *   'bar'             — single bordered row with dividers + icon tiles (hero).
 */
export default function StatGrid({ stats = [], variant = 'cards', className = '' }) {
    if (!stats.length) return null;

    if (variant === 'bar') {
        return (
            <div
                className={`grid max-w-xl grid-cols-1 divide-y divide-hairline rounded-2xl border border-line bg-card px-2 py-4 backdrop-blur sm:grid-cols-3 sm:divide-x sm:divide-y-0 ${className}`}>
                {stats.map((item) => {
                    const Icon = STAT_ICONS[item.icon] || FolderKanban;

                    return (
                        <div
                            key={item.label}
                            className='flex items-center gap-3 px-4 py-3'>
                            <span className='flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-hairline bg-tile text-accent'>
                                <Icon size={20} />
                            </span>

                            <div>
                                <p className='text-2xl font-bold leading-none text-heading'>{item.value}</p>
                                <p className='mt-1.5 max-w-[7rem] text-xs leading-4 text-muted'>{item.label}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }

    // Original layout — do not change, other sections depend on it
    return (
        <div className={`grid grid-cols-2 gap-2 ${className}`}>
            {stats.map((item) => (
                <div
                    key={item.label}
                    className='rounded-2xl border border-line bg-card p-4'>
                    <p className='text-xl font-bold text-accent'>{item.value}</p>
                    <p className='text-sm text-muted'>{item.label}</p>
                </div>
            ))}
        </div>
    );
}
