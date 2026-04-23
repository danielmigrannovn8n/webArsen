'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const stats = [
  { label: 'Лет дружбы', value: 'Почти 3' },
  { label: 'Совместных поездок', value: '1', subtext: '(на шабашку в дему)' },
  { label: 'Креатин на двоих', value: '67КГ' },
  { label: 'Огурец на двоих', value: '30 СМ', subtext: '(28 мой и 2 твой)' },
  { label: 'Общий жим', value: '230 КГ' },
  { label: 'Балл по математике на двоих', value: '180+' },
];

export default function Stats() {
  return (
    <section id="facts" className="relative py-24 sm:py-32 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row relative">
          
          {/* Left: Background Image with Parallax & Title */}
          <div className="w-full lg:w-3/5 relative h-[600px] rounded-3xl overflow-hidden hidden lg:block">
            <Image
              src="/054011a9-d8da-4f0b-936e-ab4e78d61c34.jpeg"
              alt="Background Abstract"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
              unoptimized
            />
            {/* Deep Red Tint */}
            <div className="absolute inset-0 bg-[#050505]/60 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/40 to-transparent" />
            <div className="absolute inset-0 bg-black/40" />

            {/* Title Overlay */}
            <div className="absolute top-1/2 -translate-y-1/2 left-12">
              <span className="text-[10px] uppercase tracking-[0.4em] text-red-500 font-bold mb-4 block">Интересные Факты</span>
              <h2 className="font-display text-6xl md:text-[80px] text-white font-black uppercase leading-[0.85] tracking-tighter">
                ЦИФРЫ,<br/>
                <span className="text-transparent stroke-text">КОТОРЫЕ</span><br/>
                ГОВОРЯТ.
              </h2>
            </div>
          </div>

          {/* Mobile Title (visible only on small screens) */}
          <div className="mb-12 lg:hidden">
            <span className="text-[10px] uppercase tracking-[0.4em] text-red-500 font-bold mb-4 block">Интересные Факты</span>
            <h2 className="font-display text-5xl text-white font-black uppercase leading-[0.85] tracking-tighter">
              ЦИФРЫ,<br/>
              <span className="text-transparent stroke-text">КОТОРЫЕ</span><br/>
              ГОВОРЯТ.
            </h2>
          </div>

          {/* Right: Cascading Glass Cards */}
          <div className="w-full lg:w-2/5 lg:absolute lg:right-12 lg:top-1/2 lg:-translate-y-1/2 z-10 flex flex-col gap-6">
            {stats.map((stat, index) => (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                key={stat.label}
                className={`group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-8 transition-all duration-300 hover:bg-red-600 hover:-translate-y-2 lg:w-[320px] ${
                  index % 2 === 1 ? 'lg:ml-auto' : 'lg:ml-12' /* Cascade effect */
                }`}
              >
                <p className="text-[10px] text-red-500 group-hover:text-black font-bold tracking-[0.2em] uppercase mb-2 transition-colors">
                  {stat.label}
                </p>
                <p className="font-display text-4xl sm:text-6xl text-white group-hover:text-black font-black uppercase tracking-tighter transition-colors">
                  {stat.value}
                </p>
                {stat.subtext && (
                  <p className="text-[10px] text-zinc-400 group-hover:text-black/70 font-bold uppercase mt-2 transition-colors tracking-widest">
                    {stat.subtext}
                  </p>
                )}
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
