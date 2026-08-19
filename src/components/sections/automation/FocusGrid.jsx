import { useState } from 'react';

/* ============================================================================
 * AUTOMATION — TESTING FOCUS
 * Four highlight tiles. Purely a spotlight: the active tile follows hover,
 * focus, or tap, and nothing else on the page depends on it.
 * ==========================================================================*/

export default function FocusGrid({ label, items }) {
    const [active, setActive] = useState(0);

    return (
        <>
            <p className='mb-3 mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-accent'>{label}</p>

            <div className='grid grid-cols-2 gap-3'>
                {items.map((item, i) => {
                    const Icon = item.icon;
                    const isActive = i === active;
                    const select = () => setActive(i);

                    return (
                        <button
                            key={item.label}
                            type='button'
                            onMouseEnter={select}
                            onFocus={select}
                            onClick={select}
                            aria-pressed={isActive}
                            className={`flex cursor-pointer flex-col items-center gap-2 rounded-2xl border p-3 text-center transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong ${
                                isActive ? '-translate-y-0.5 border-accent-line bg-accent-tint shadow-lg shadow-accent-tint' : 'border-hairline bg-inset hover:border-accent-line'
                            }`}>
                            <Icon
                                size={20}
                                className={isActive ? 'text-accent' : 'text-muted'}
                            />
                            <span className={`text-xs font-semibold leading-4 ${isActive ? 'text-accent' : 'text-body'}`}>{item.label}</span>
                        </button>
                    );
                })}
            </div>
        </>
    );
}
