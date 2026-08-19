import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/common/ScrollToTop';

/* ============================================================================
 * MAIN LAYOUT
 * The page chrome that wraps every section: sticky navbar, the page itself,
 * footer, and the floating scroll-to-top button.
 * ==========================================================================*/

export default function MainLayout({ children }) {
    return (
        <main className='min-h-screen bg-page text-body'>
            <Navbar />
            {children}
            <Footer />
            <ScrollToTop />
        </main>
    );
}
