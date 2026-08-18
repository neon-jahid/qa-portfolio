import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'theme';
const DARK_QUERY = '(prefers-color-scheme: dark)';

/** localStorage throws in some privacy modes — never let that break the page. */
function readStored() {
    try {
        const value = localStorage.getItem(STORAGE_KEY);
        return value === 'light' || value === 'dark' ? value : null;
    } catch {
        return null;
    }
}

function store(theme) {
    try {
        localStorage.setItem(STORAGE_KEY, theme);
    } catch {
        // ignore — the theme still applies for this session
    }
}

export default function useTheme() {
    // Read straight off <html> — index.html already applied the right class
    // before paint, so this never disagrees with what the user is looking at.
    const [theme, setTheme] = useState(() => (document.documentElement.classList.contains('dark') ? 'dark' : 'light'));

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    // Follow the OS until the visitor picks a theme themselves. Persisting only
    // inside toggleTheme is what keeps this working — writing to storage on mount
    // would count as a choice and freeze the theme on the first visit.
    useEffect(() => {
        const media = window.matchMedia(DARK_QUERY);
        const onChange = (event) => {
            if (!readStored()) setTheme(event.matches ? 'dark' : 'light');
        };

        media.addEventListener('change', onChange);
        return () => media.removeEventListener('change', onChange);
    }, []);

    const toggleTheme = useCallback(() => {
        setTheme((current) => {
            const next = current === 'dark' ? 'light' : 'dark';
            store(next);
            return next;
        });
    }, []);

    return { theme, toggleTheme };
}
