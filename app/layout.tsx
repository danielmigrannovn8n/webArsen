import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/sections/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Arsen Safiullin Portfolio Spotlight',
  description: 'Premium dark mode landing page spotlighting a friend',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ru" className={`dark ${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="bg-[#050505] text-white font-sans antialiased selection:bg-red-500/30 selection:text-red-200 min-h-screen flex flex-col relative" suppressHydrationWarning>
        {/* Background Bokeh Effects */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-red-900/20 blur-[120px] mix-blend-screen" />
          <div className="absolute top-[30%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-red-800/10 blur-[150px] mix-blend-screen" />
          <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-red-950/30 blur-[150px] mix-blend-screen" />
        </div>
        
        <Navbar />
        
        <main className="relative z-10 flex-1 flex flex-col">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
