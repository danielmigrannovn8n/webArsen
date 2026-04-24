'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const photos = [
  { id: 1, src: '44faedb5-9b76-4668-95ce-6b87b801d8ed.jpeg', aspect: 'aspect-[4/5]', delay: 0.1 },
  { id: 2, src: '586ea2da-cfd1-46ad-a6c6-b85edb786193.jpeg', aspect: 'aspect-[3/4] lg:mt-12', delay: 0.2 },
  { id: 3, src: '6cc1e12a-79f3-4022-b0fb-7852942f0a0e.jpeg', aspect: 'aspect-square lg:mt-24', delay: 0.3 },
  { id: 4, src: '6d223b29-65b4-4c0a-8556-d65c7393dae8.jpeg', aspect: 'aspect-square lg:-mt-12', delay: 0.1 },
  { id: 5, src: 'acce5210-2723-4652-9216-b20d2955c82a.jpeg', aspect: 'aspect-[4/3] lg:mt-0', delay: 0.2 },
  { id: 6, src: 'b5982233-c133-4278-a773-a93f2d14265c.jpeg', aspect: 'aspect-[3/4] lg:mt-12', delay: 0.3 },
  { id: 7, src: 'b62db764-20b7-464a-8d2f-c512e7c00a1a.jpeg', aspect: 'aspect-[4/5] lg:-mt-8', delay: 0.1 },
  { id: 8, src: 'c71ee4f0-aabb-4334-8a98-bcba4d714b12.jpeg', aspect: 'aspect-square lg:mt-8', delay: 0.2 },
  { id: 9, src: 'e26eb65d-03ca-45c0-bcdd-59a83f898593.jpeg', aspect: 'aspect-[4/3] lg:mt-24', delay: 0.3 },
  { id: 10, src: 'e97e2d27-fab1-43e3-8c43-3a0a8cac4d06.jpeg', aspect: 'aspect-[3/4] lg:mt-0', delay: 0.1 },
  { id: 11, src: 'e98d1471-4788-4c3f-9e6b-e0fd87ced21c.jpeg', aspect: 'aspect-[4/5] lg:mt-16', delay: 0.2 },
  { id: 12, src: 'f88c5c70-9b40-4790-829f-220c2b5f83e7.jpeg', aspect: 'aspect-square lg:mt-4', delay: 0.3 },
];

export default function Gallery() {
  return (
    <section className="py-24 sm:py-32 w-full relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-red-500 font-bold mb-4 block">Лайфстайл</span>
            <h2 className="font-display text-5xl sm:text-7xl lg:text-[80px] leading-[0.85] text-white font-black uppercase tracking-tighter">
              АРХИВ<br/>
              <span className="text-transparent stroke-text">МОМЕНТОВ</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: photo.delay }}
              className={`relative w-full rounded-2xl overflow-hidden group ${photo.aspect}`}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <Image
                src={photo.src}
                alt={'Фотография'}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                referrerPolicy="no-referrer"
                unoptimized
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
