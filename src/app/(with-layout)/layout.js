import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';

// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-screen text-4xl">
        {children}
      </div>
      <Footer></Footer>
    </>

  );
}
