import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/common/ScrollToTop';
import PageBackdrop from '../components/backdrop/PageBackdrop';

/* ============================================================================
 * MAIN LAYOUT
 * The page chrome that wraps every section: the site-wide backdrop, sticky
 * navbar, the page itself, footer, and the floating scroll-to-top button.
 *
 * PageBackdrop is pinned to the viewport behind everything (-z-10) and paints
 * the page colour itself, so <main> must stay transparent — and so must the
 * sections, or they would hide it. Section-local decoration should compose the
 * primitives in components/backdrop/ instead of stacking its own opaque layer.
 * ==========================================================================*/

export default function MainLayout({ children }) {
    return (
        <main className='relative min-h-screen text-body'>
            <PageBackdrop />
            <Navbar />
            {children}
            <Footer />
            <ScrollToTop />
        </main>
    );
}
