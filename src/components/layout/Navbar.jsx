import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Container from '../common/Container';
import ThemeToggle from '../common/ThemeToggle';
import { navItems, portfolio } from '../../data/portfolioData';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className='sticky top-0 z-50 border-b border-line bg-nav backdrop-blur-xl'>
            <Container className='flex items-center justify-between py-4'>
                <a
                    href='#home'
                    className='text-lg font-bold tracking-tight text-heading'>
                    {portfolio.name}
                </a>

                <div className='hidden gap-6 text-sm text-body lg:flex'>
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className='transition-colors duration-300 hover:text-accent'>
                            {item.label}
                        </a>
                    ))}
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
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className='transition-colors duration-300 hover:text-accent'
                                    onClick={() => setIsMenuOpen(false)}>
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </Container>
                </div>
            )}
        </nav>
    );
}
