import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function MainLayout({ children }) {
    return (
        <main className='min-h-screen bg-page text-body'>
            <Navbar />
            {children}
            <Footer />
        </main>
    );
}
