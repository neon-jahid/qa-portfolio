import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Container from '../common/Container';
import ThemeToggle from '../common/ThemeToggle';
import useActiveSection from '../../hooks/useActiveSection';
import { navItems, portfolio } from '../../data/portfolioData';

const SECTION_IDS = navItems.map((item) => item.href.slice(1));

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const activeId = useActiveSection(SECTION_IDS);

    return (
        <nav className='sticky top-0 z-50 border-b border-line bg-nav backdrop-blur-xl'>
            <Container className='flex items-center justify-between py-4'>
                <a
                    href='#home'
                    className='text-lg font-bold tracking-tight text-heading'>
                    {portfolio.name}
                </a>

                <div className='hidden gap-6 text-sm text-body lg:flex'>
                    {navItems.map((item) => {
                        const isActive = item.href.slice(1) === activeId;

                        return (
                            <a
                                key={item.href}
                                href={item.href}
                                aria-current={isActive ? 'true' : undefined}
                                className={`relative py-1 transition-colors duration-300 hover:text-accent ${isActive ? 'text-accent' : ''}`}>
                                {item.label}
                                {/* underline slides in on the current section */}
                                <span
                                    aria-hidden='true'
                                    className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-accent transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0'}`}
                                />
                            </a>
                        );
                    })}
                </div>

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

            {isMenuOpen && (
                <div className='border-t border-line bg-nav-solid lg:hidden'>
                    <Container className='py-4'>
                        <div className='flex flex-col gap-4 text-sm text-body'>
                            {navItems.map((item) => {
                                const isActive = item.href.slice(1) === activeId;

                                return (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        aria-current={isActive ? 'true' : undefined}
                                        className={`transition-colors duration-300 hover:text-accent ${isActive ? 'text-accent' : ''}`}
                                        onClick={() => setIsMenuOpen(false)}>
                                        {item.label}
                                    </a>
                                );
                            })}
                        </div>
                    </Container>
                </div>
            )}
        </nav>
    );
}
