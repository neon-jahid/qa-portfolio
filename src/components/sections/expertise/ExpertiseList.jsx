import ExpertiseRow from './ExpertiseRow';
import { toneAt } from '../../../lib/tones';

/* ============================================================================
 * EXPERTISE — LEFT COLUMN (category list)
 * Owns nothing but the loop; which row is active is decided by the section.
 * ==========================================================================*/

export default function ExpertiseList({ items, activeIndex, onSelect }) {
    return (
        <div className='border-t border-line'>
            {items.map((item, i) => (
                <ExpertiseRow
                    key={item.title}
                    item={item}
                    index={i}
                    tone={toneAt(i)}
                    isActive={i === activeIndex}
                    onSelect={() => onSelect(i)}
                />
            ))}
        </div>
    );
}
