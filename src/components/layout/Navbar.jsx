import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Container from '../common/Container';
import ThemeToggle from '../common/ThemeToggle';
import DesktopNav from './navbar/DesktopNav';
import MobileNav from './navbar/MobileNav';
import useActiveSection from '../../hooks/useActiveSection';
import { navItems } from '../../data/navigation';
import { profile } from '../../data/profile';

/* ============================================================================
 * NAVBAR
 *
 * Sticky header. The links themselves live in:
 *   navbar/DesktopNav — the lg+ row with the sliding underline
 *   navbar/MobileNav  — the drop-down below lg
 *   navbar/NavLink    — the single link both of them render
 *
 * `useActiveSection` watches the section ids from navItems and returns the one
 * currently in view, which is what highlights a link.
 * ==========================================================================*/

const SECTION_IDS = navItems.map((item) => item.href.slice(1));

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const activeId = useActiveSection(SECTION_IDS);

    return (
        <nav className='sticky top-0 z-50 border-b border-line bg-nav backdrop-blur-xl'>
            <Container className='flex items-center justify-between py-4'>
                {/* ---- Wordmark ---- */}
                <a
                    href='#home'
                    className='text-lg font-bold tracking-tight text-heading'>
                    {profile.name}
                </a>

                {/* ---- Links (lg+) ---- */}
                <DesktopNav
                    items={navItems}
                    activeId={activeId}
                />

                {/* ---- Theme toggle + burger ---- */}
                <div className='flex items-center gap-2'>
                    <ThemeToggle />

                    <button
                        type='button'
                        className='inline-flex h-9 w-9 items-center justify-center rounded-xl text-heading lg:hidden'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label='Toggle menu'
                        aria-expanded={isMenuOpen}>
                        {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </Container>

            {/* ---- Menu (below lg) ---- */}
            {isMenuOpen && (
                <MobileNav
                    items={navItems}
                    activeId={activeId}
                    onNavigate={() => setIsMenuOpen(false)}
                />
            )}
        </nav>
    );
}
