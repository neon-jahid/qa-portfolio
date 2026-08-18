import { Moon, Sun } from 'lucide-react';
import useTheme from '../../hooks/useTheme';

export default function ThemeToggle({ className = '' }) {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <button
            type='button'
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            className={`inline-flex h-9 w-9 items-center justify-center rounded-xl border border-line bg-card text-muted transition-colors duration-300 hover:border-accent-line hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong ${className}`}>
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    );
}
