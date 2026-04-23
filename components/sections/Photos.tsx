'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const photos = [
  { id: 1, src: 'https://picsum.photos/seed/alex1/600/800', alt: 'Спорт', aspect: 'aspect-[3/4]', delay: 0.1 },
  { id: 2, src: 'https://picsum.photos/seed/alex2/800/600', alt: 'Путешествия', aspect: 'aspect-[4/3] lg:mt-24', delay: 0.3 },
  { id: 3, src: 'https://picsum.photos/seed/alex3/800/800', alt: 'Работа', aspect: 'aspect-square lg:-mt-12', delay: 0.2 },
];

export default function Photos() {
  return (
    <section id="sport" className="py-24 sm:py-32 w-full relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-red-500 font-bold mb-4 block">Лайфстайл</span>
            <h2 className="font-display text-5xl sm:text-7xl lg:text-[80px] leading-[0.85] text-white font-black uppercase tracking-tighter">
              МОМЕНТЫ<br/>
              <span className="text-transparent stroke-text">ИЗ ЖИЗНИ</span>
            </h2>
          </div>
          <button className="hidden md:flex px-6 py-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md text-white text-[11px] font-black uppercase tracking-widest hover:bg-red-600 hover:text-black hover:border-red-600 transition-all">
            Все фото
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: photo.delay }}
              className={`relative w-full rounded-2xl overflow-hidden group ${photo.aspect}`}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                referrerPolicy="no-referrer"
                unoptimized
              />
              <div className="absolute bottom-6 left-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="px-3 py-1 bg-red-600 text-black text-[10px] font-black uppercase tracking-widest">
                  {photo.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <button className="md:hidden mt-8 w-full px-6 py-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md text-white text-[11px] font-black uppercase tracking-widest hover:bg-red-600 hover:text-black hover:border-red-600 transition-all flex items-center justify-center">
          Все фото
        </button>

      </div>
    </section>
  );
}
