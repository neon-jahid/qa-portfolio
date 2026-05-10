import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function MainLayout({ children }) {
    return (
        <main className='min-h-screen bg-slate-950 text-slate-100'>
            <Navbar />
            {children}
            <Footer />
        </main>
    );
}
