'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Camera } from 'lucide-react';

import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Мы', href: '/' },
  { name: 'Спорт', href: '/sport' },
  { name: 'Учеба', href: '/study' },
  { name: 'Факты', href: '/facts' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-8 px-6 lg:px-12 pointer-events-none"
    >
      <nav className="pointer-events-auto flex items-end justify-between pb-6 w-full max-w-7xl border-b border-white/10 bg-[#050505]/80 backdrop-blur-md">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-[0.4em] text-red-500 font-bold mb-2">Личный Архив</span>
          <span className="text-2xl font-light tracking-tighter uppercase text-white">
            Арсен <span className="text-red-600 font-black">/</span> Сафиуллин
          </span>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-widest text-zinc-400">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name}>
                <Link 
                  href={link.href}
                  className={`hover:text-white pb-1 transition-all ${isActive ? 'text-white border-b border-red-600' : 'hover:border-b hover:border-red-600'}`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <button className="md:hidden flex items-center justify-center w-10 h-10 border border-white/10 bg-white/5">
           <div className="w-4 h-[2px] bg-white relative before:absolute before:-top-1.5 before:w-4 before:h-[2px] before:bg-white after:absolute after:top-1.5 after:w-4 after:h-[2px] after:bg-white" />
        </button>
      </nav>
    </motion.header>
  );
}
