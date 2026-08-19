import { useEffect, useRef, useState } from 'react';

/**
 * Drives the "fill from 0%" progress bars in the hero dashboard.
 *
 * - `ref`    — put it on the element that should trigger the first fill.
 * - `filled` — false = bars sit at 0%, true = bars animate to their level.
 * - `replay` — resets to 0% and fills again (wired to hover).
 *
 * IntersectionObserver না থাকলে (পুরনো ব্রাউজার) বারগুলো সরাসরি ভরা দেখাবে।
 */
export default function useBarFill({ rootMargin = '0px 0px -15% 0px' } = {}) {
    const ref = useRef(null);
    const [filled, setFilled] = useState(() => typeof IntersectionObserver === 'undefined');

    // ---- first fill: when the bars scroll into view (once) ----
    useEffect(() => {
        const node = ref.current;
        if (!node || typeof IntersectionObserver === 'undefined') return;

        // threshold রাখা হয়েছে কম + নিচ থেকে rootMargin — ছোট মোবাইল ভিউপোর্টে
        // প্যানেলটা স্ক্রিনের চেয়ে লম্বা হলেও যেন observer ফায়ার করে
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setFilled(true);
                    observer.disconnect();
                }
            },
            { threshold: 0, rootMargin },
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [rootMargin]);

    // ---- replay: hover করলে bar গুলো আবার ০ থেকে ভরবে ----
    // reset আর re-fill এক ফ্রেমে হলে ব্রাউজার transition টা skip করে,
    // তাই double rAF দিয়ে ফ্রেম দুটো আলাদা রাখা হয়েছে
    const replay = () => {
        if (typeof window === 'undefined') return;
        setFilled(false);
        window.requestAnimationFrame(() => window.requestAnimationFrame(() => setFilled(true)));
    };

    return { ref, filled, replay };
}
