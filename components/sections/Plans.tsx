'use client';

import { motion } from 'motion/react';

const plansList = [
  { year: 'Этим летом', text: 'Сгонять в 2 куда-нибудь' },
  { year: 'В 18 лет', text: 'Переехать в Москву' },
  { year: 'В 22 года', text: 'Вместе кататься на заряженных тачках' },
  { year: 'В 26 лет', text: 'Путешествовать по всему миру и забирать бананы у обезьян в джунглях' },
  { year: 'В 30 лет', text: 'Гулять семьями и с детьми' },
  { year: 'В 45 лет', text: 'Быть пузатыми мультимиллионерами на больших тачках' },
  { year: 'В 60 лет', text: 'Оставить наследство и многомиллионные компании детям и внукам' },
  { year: 'В 65 лет', text: 'Сесть в тюрьму за шутки про инвалидов в 16 лет' },
  { year: 'В 80 лет', text: 'Умереть в одной камере в тюрьме' },
  { year: 'Далее', text: 'Чиллить и тренироваться на том свете' },
];

export default function Plans() {
  return (
    <section className="py-24 sm:py-32 w-full relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        
        <div className="mb-20">
          <span className="text-[10px] uppercase tracking-[0.4em] text-red-500 font-bold mb-4 block">ТАЙМЛАЙН ДРУЖБЫ</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl sm:text-7xl lg:text-[80px] text-white font-black uppercase tracking-tighter leading-[0.85]"
          >
            СОВМЕСТНЫЕ <br />
            <span className="text-transparent stroke-text">ПЛАНЫ</span>
          </motion.h2>
        </div>

        <div className="relative border-l-2 border-red-900/40 ml-4 sm:ml-8 flex flex-col gap-12">
          {plansList.map((plan, index) => (
            <motion.div 
              key={plan.year}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 sm:pl-16"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-7px] top-4 sm:top-5 w-3 h-3 bg-red-600 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.8)]" />
              
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 border border-white/10 bg-[#050505]/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl hover:bg-[#0a0a0a] hover:border-red-600/50 transition-all group shadow-xl">
                <span className="text-red-600 font-black uppercase tracking-tighter text-xl sm:text-3xl whitespace-nowrap drop-shadow-md">
                  {plan.year}
                </span>
                <h3 className="text-white text-base sm:text-xl font-medium tracking-tight group-hover:text-zinc-300 transition-colors">
                  {plan.text}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}