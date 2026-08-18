import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const SHOW_AFTER = 600;

export default function ScrollToTop() {
    // Seeded from the current offset so a reload part-way down the page shows
    // the button immediately rather than waiting for the first scroll event.
    const [visible, setVisible] = useState(() => typeof window !== 'undefined' && window.scrollY > SHOW_AFTER);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const toTop = () => {
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
    };

    return (
        <button
            type='button'
            onClick={toTop}
            aria-label='Scroll back to top'
            title='Back to top'
            tabIndex={visible ? 0 : -1}
            aria-hidden={!visible}
            className={`fixed bottom-5 right-5 z-40 flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-line bg-card text-accent shadow-lg shadow-accent-tint backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-line hover:bg-card-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong ${
                visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
            }`}>
            <ArrowUp size={20} />
        </button>
    );
}
