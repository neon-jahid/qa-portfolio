import { portfolio } from '../../data/portfolioData';

export default function Footer() {
    return (
        <footer className='border-t border-white/10 px-4 py-6 text-center text-sm text-slate-500 sm:px-6 md:py-8'>
            © {new Date().getFullYear()} {portfolio.name}.
        </footer>
    );
}
