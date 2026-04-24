'use client';

import { motion } from 'motion/react';
import { Lightbulb, Compass } from 'lucide-react';

import Image from 'next/image';

const subjects = [
  {
    num: '01',
    title: 'Математика',
    value: 'МАЛО',
    desc: 'Выше среднего. Сложные логарифмы и геометрия как орешки.',
    icon: Lightbulb,
    image: '2a95a0ee-6f49-47e3-9d09-394c9b87e3e6.jpeg'
  },
  {
    num: '02',
    title: 'Информатика',
    value: 'МОЖНО БОЛЬШЕ',
    desc: 'Алгоритмы, программирование и логика.',
    icon: Compass,
    image: '39b63253-86e3-48d7-b304-1af3a1b03ab2.jpeg'
  },
  {
    num: '03',
    title: 'Русский Язык',
    value: 'МАЛО',
    desc: 'Грамотность, сочинения и орфография.',
    icon: Lightbulb,
    image: '3d31953d-9965-497d-900a-ce29c40cac35.jpeg'
  },
  {
    num: '04',
    title: 'Физика',
    value: 'МОЖНО БОЛЬШЕ',
    desc: 'Понимание устройства мира и эксперименты.',
    icon: Compass,
    image: '424684d7-d967-4a33-90c6-1bbcc3949463.jpeg'
  },
];

export default function StudyStats() {
  return (
    <section className="py-24 sm:py-32 w-full pt-40">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        
        <div className="mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-red-500 font-bold mb-4 block">АКАДЕМИЧЕСКАЯ УСПЕВАЕМОСТЬ</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl sm:text-7xl lg:text-[80px] text-white font-black uppercase tracking-tighter leading-[0.85] inline-flex items-center gap-4"
          >
            ЗНАНИЯ <span className="text-red-600 font-black">/</span> БАЛЛЫ
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-[1px] w-full max-w-sm bg-gradient-to-r from-red-600 to-transparent mt-8 origin-left border-none"
          />
        </div>

        {/* Красный диплом блок */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 bg-red-600 text-black p-8 sm:p-12 rounded-2xl flex flex-col sm:flex-row items-center justify-between shadow-[0_0_40px_rgba(220,38,38,0.2)] border border-red-500"
        >
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold block mb-2 opacity-80">ВЫДАЮЩИЙСЯ РЕЗУЛЬТАТ</span>
            <h3 className="font-display font-black text-4xl sm:text-6xl tracking-tighter uppercase leading-[0.9]">
              АТТЕСТАТ С ОТЛИЧИЕМ <br/>
              <span className="text-white">В 9 КЛАССЕ</span>
            </h3>
          </div>
          <div className="mt-8 sm:mt-0 font-display text-[80px] leading-none font-black opacity-20 tracking-tighter mix-blend-overlay">
            #1
          </div>
        </motion.div>

        {/* Баллы ЕГЭ/ОГЭ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {subjects.map((sub, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={sub.num}
              className={`relative overflow-hidden group border border-white/10 bg-white/5 backdrop-blur-lg hover:border-red-600 transition-all duration-300 rounded-xl flex flex-col p-8`}
            >
              {/* Background Image on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none">
                 <Image src={sub.image} alt={sub.title} fill className="object-cover" unoptimized />
                 <div className="absolute inset-0 bg-red-900/60 mix-blend-multiply" />
                 <div className="absolute inset-0 bg-black/60" />
              </div>

              <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-red-900/80 transition-colors duration-300 pointer-events-none z-10">
                <sub.icon className="w-48 h-48 -mt-16 -mr-16" strokeWidth={1} />
              </div>
              
              <div className="font-display text-[32px] sm:text-[40px] xl:text-[45px] leading-[0.9] tracking-tighter font-black text-transparent stroke-text mb-4 group-hover:text-red-500 group-hover:![-webkit-text-stroke:0] transition-colors duration-300 break-words relative z-10">
                {sub.value}
              </div>
              
              <h3 className="text-xl font-black uppercase tracking-widest text-white mb-4 group-hover:text-red-500 transition-colors duration-300 relative z-10">
                {sub.title}
              </h3>
              
              <p className="text-zinc-400 group-hover:text-zinc-500 text-sm leading-relaxed transition-colors duration-300 relative z-10">
                {sub.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
