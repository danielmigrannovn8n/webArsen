'use client';

import { motion } from 'motion/react';

const factsList = [
  { label: 'Рост', value: '189 СМ' },
  { label: 'Вес', value: '90 КГ' },
  { label: 'Перчик', value: '2 СМ' },
  { label: 'Жопа', value: 'Красивая' },
  { label: 'Волосы', value: 'Имеются' },
  { label: 'Типаж', value: 'TRUE CHAD' },
  { label: 'Писюннико', value: 'Мунесувал' },
  { label: 'Тихо', value: 'Неспеша' },
  { label: 'Лысость', value: 'Отсутствует', subtext: '(с недавних пор)' },
  { label: 'Пузо', value: 'Волоснявое' },
  { label: 'Борода', value: 'В зародыше' },
];

export default function PersonalFacts() {
  return (
    <section className="py-24 sm:py-32 w-full pt-40">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        
        <div className="mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-red-500 font-bold mb-4 block">БИОМЕТРИЯ И АНАЛИТИКА</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl sm:text-7xl lg:text-[80px] text-white font-black uppercase tracking-tighter leading-[0.85] inline-flex flex-wrap items-center gap-4"
          >
            ТОЛЬКО <span className="text-red-600 font-black">/</span> ФАКТЫ
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-[1px] w-full max-w-sm bg-gradient-to-r from-red-600 to-transparent mt-8 origin-left border-none"
          />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {factsList.map((fact, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              key={fact.label}
              className="relative overflow-hidden group border border-white/10 bg-white/5 backdrop-blur-lg hover:bg-black transition-all duration-300 rounded-xl flex flex-col p-6 min-h-[160px] justify-between"
            >
              <p className="text-[10px] text-red-500 group-hover:text-red-600 font-bold tracking-[0.2em] uppercase mb-4 transition-colors">
                {fact.label}
              </p>
              <div>
                <p className="font-display text-2xl sm:text-3xl lg:text-4xl text-white group-hover:text-transparent group-hover:stroke-text font-black uppercase tracking-tighter transition-all duration-300 break-words leading-[0.9]">
                  {fact.value}
                </p>
                {fact.subtext && (
                  <p className="text-[10px] text-zinc-500 font-bold uppercase mt-2 tracking-widest">
                    {fact.subtext}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
