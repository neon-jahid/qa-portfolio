import { profile } from '../../data/profile';

/* ============================================================================
 * FOOTER
 * One line: the copyright, with the year taken from the clock.
 * ==========================================================================*/

export default function Footer() {
    return (
        <footer className='border-t border-line px-4 py-6 text-center text-sm text-faint sm:px-6 md:py-8'>
            © {new Date().getFullYear()} {profile.name}.
        </footer>
    );
}
