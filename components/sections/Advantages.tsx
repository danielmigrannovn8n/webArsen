'use client';

import { motion } from 'motion/react';
import { Target, Lightbulb, Zap, Compass } from 'lucide-react';

const advantages = [
  {
    num: '01',
    title: 'Спорт',
    desc: 'Ежедневные тренировки и железная дисциплина. Спорт для него — это не хобби, а стиль жизни.',
    icon: Target,
  },
  {
    num: '02',
    title: 'Учеба',
    desc: 'Постоянный голод до знаний. Изучение новых технологий и глубокое погружение в процессы.',
    icon: Lightbulb,
  },
  {
    num: '03',
    title: 'Энергия',
    desc: 'Способность заряжать окружающих своим позитивом и нескончаемым потоком идей.',
    icon: Zap,
  },
  {
    num: '04',
    title: 'Видение',
    desc: 'Умение смотреть на вещи под другим углом и находить нестандартные решения сложных задач.',
    icon: Compass,
  },
];

export default function Advantages() {
  return (
    <section id="study" className="py-24 sm:py-32 w-full">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl sm:text-7xl lg:text-[80px] text-white font-black uppercase tracking-tighter leading-[0.85] inline-flex items-center gap-4"
          >
            ДИСЦИПЛИНА <span className="text-red-600 font-black">/</span> ФОКУС
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
          {advantages.map((adv, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={adv.num}
              className={`relative overflow-hidden group border border-white/10 bg-white/5 backdrop-blur-lg hover:bg-red-600 transition-all duration-300 rounded-xl flex flex-col p-8`}
            >
              <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-black/10 transition-colors duration-300 pointer-events-none">
                <adv.icon className="w-48 h-48 -mt-16 -mr-16" strokeWidth={1} />
              </div>
              
              <div className="font-display text-[80px] leading-none tracking-tighter font-black text-transparent stroke-text mb-8 group-hover:text-black group-hover:![-webkit-text-stroke:0] transition-colors duration-300">
                {adv.num}
              </div>
              
              <h3 className="text-xl font-black uppercase tracking-widest text-white mb-4 group-hover:text-black transition-colors duration-300 relative z-10">
                {adv.title}
              </h3>
              
              <p className="text-zinc-400 group-hover:text-black/80 text-sm leading-relaxed transition-colors duration-300 relative z-10">
                {adv.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
