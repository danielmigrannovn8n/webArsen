'use client';

import { motion } from 'motion/react';
import { Target, Zap } from 'lucide-react';

import Image from 'next/image';

const exercises = [
  {
    num: '01',
    title: 'Подтягивания',
    value: '20+',
    desc: 'Чистыми, без рывков. Турник — второй дом.',
    icon: Target,
    image: '/11a483c0-1cf3-47b0-8cfd-6a31fe09047c.jpeg'
  },
  {
    num: '02',
    title: 'Жим лежа',
    value: '120КГ',
    desc: 'Классика базы. Строго технично.',
    icon: Zap,
    image: '/12534cdc-5fff-47d0-954d-403eff427ba6.jpeg'
  },
  {
    num: '03',
    title: 'Бицепс',
    value: '80КГ',
    desc: 'Строгий подъем штанги стоя.',
    icon: Target,
    image: '/16e881c3-5415-4329-ab50-90897a8fc479.jpeg'
  },
  {
    num: '04',
    title: 'Подъем на луч',
    value: '35 НА 7',
    desc: 'Тяжелая база. Железная хватка.',
    icon: Zap,
    image: '/27ca48cd-6c33-422f-afe2-d0007e9de514.jpeg'
  },
];

export default function SportStats() {
  return (
    <section className="py-24 sm:py-32 w-full pt-40">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        
        <div className="mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-red-500 font-bold mb-4 block">СПОРТИВНАЯ ФОРМА</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl sm:text-7xl lg:text-[80px] text-white font-black uppercase tracking-tighter leading-[0.85] inline-flex items-center gap-4"
          >
            ЖЕЛЕЗО <span className="text-red-600 font-black">/</span> БАЗА
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-[1px] w-full max-w-sm bg-gradient-to-r from-red-600 to-transparent mt-8 origin-left border-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {exercises.map((adv, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={adv.num}
              className={`relative overflow-hidden group border border-white/10 bg-white/5 backdrop-blur-lg hover:border-red-600 transition-all duration-300 rounded-xl flex flex-col p-8`}
            >
              {/* Background Image on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none">
                 <Image src={adv.image} alt={adv.title} fill className="object-cover" unoptimized />
                 <div className="absolute inset-0 bg-red-900/80 mix-blend-multiply" />
                 <div className="absolute inset-0 bg-black/40" />
              </div>

              <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-white/20 transition-colors duration-300 pointer-events-none z-10">
                <adv.icon className="w-48 h-48 -mt-16 -mr-16" strokeWidth={1} />
              </div>
              
              <div className="font-display text-[40px] lg:text-[45px] xl:text-[50px] leading-none tracking-tighter font-black text-transparent stroke-text mb-4 group-hover:text-white group-hover:![-webkit-text-stroke:0] transition-colors duration-300 break-words relative z-10">
                {adv.value}
              </div>
              
              <h3 className="text-xl font-black uppercase tracking-widest text-white mb-4 transition-colors duration-300 relative z-10">
                {adv.title}
              </h3>
              
              <p className="text-zinc-400 group-hover:text-zinc-200 text-sm leading-relaxed transition-colors duration-300 relative z-10">
                {adv.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
