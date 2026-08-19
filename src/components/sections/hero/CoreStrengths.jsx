import StrengthBar from './StrengthBar';
import useBarFill from '../../../hooks/useBarFill';

/* ============================================================================
 * HERO — CORE STRENGTHS
 * The progress-bar list inside the dashboard panel.
 *
 * Fill behaviour lives in useBarFill:
 *   - fills once when the list scrolls into view
 *   - re-fills from 0% every time the pointer enters the list (onMouseEnter)
 * ==========================================================================*/

export default function CoreStrengths({ title, strengths }) {
    const { ref, filled, replay } = useBarFill();

    return (
        <>
            <h3 className='text-xs font-semibold uppercase tracking-[0.14em] text-accent'>{title}</h3>

            <div
                ref={ref}
                onMouseEnter={replay}
                className='mt-5 space-y-5'>
                {strengths.map((strength, i) => (
                    <StrengthBar
                        key={strength.name}
                        name={strength.name}
                        level={strength.level}
                        icon={strength.icon}
                        filled={filled}
                        index={i}
                    />
                ))}
            </div>
        </>
    );
}
