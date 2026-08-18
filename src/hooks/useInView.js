import { useEffect, useRef, useState } from 'react';

/**
 * Fires once when the element scrolls into view. Used for section reveals.
 * Falls back to "visible" when IntersectionObserver is missing, so content
 * can never get stuck at opacity 0.
 */
export default function useInView({ rootMargin = '0px 0px -12% 0px' } = {}) {
    const ref = useRef(null);
    const [inView, setInView] = useState(() => typeof IntersectionObserver === 'undefined');

    useEffect(() => {
        const node = ref.current;
        if (!node || typeof IntersectionObserver === 'undefined') return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0, rootMargin },
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [rootMargin]);

    return { ref, inView };
}
