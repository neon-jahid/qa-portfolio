import { useEffect, useState } from 'react';

/**
 * Scroll spy — returns the id of the section currently filling the viewport.
 * The rootMargin band ignores the top strip (under the sticky navbar) and the
 * bottom half, so exactly one section is "current" at a time.
 */
export default function useActiveSection(ids) {
    const [active, setActive] = useState('');
    const key = ids.join(',');

    useEffect(() => {
        if (typeof IntersectionObserver === 'undefined') return;

        const elements = key
            .split(',')
            .map((id) => document.getElementById(id))
            .filter(Boolean);

        if (!elements.length) return;

        const seen = new Map();
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => seen.set(entry.target.id, entry.intersectionRatio));

                let best = '';
                let bestRatio = 0;
                seen.forEach((ratio, id) => {
                    if (ratio > bestRatio) {
                        bestRatio = ratio;
                        best = id;
                    }
                });

                if (best) setActive(best);
            },
            { rootMargin: '-25% 0px -45% 0px', threshold: [0, 0.2, 0.5, 1] },
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [key]);

    return active;
}
