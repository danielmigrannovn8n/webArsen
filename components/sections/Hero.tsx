'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="us" className="min-h-screen flex items-center justify-center pt-32 pb-20 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 w-full items-center">
        
        {/* Left: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="col-span-1 lg:col-span-6 flex flex-col items-start"
        >
          <div className="inline-block bg-red-600 text-black px-3 py-1 text-[10px] font-black uppercase mb-6 tracking-widest">
            Top Athlete & Scholar
          </div>
          <h2 className="font-display text-6xl sm:text-7xl lg:text-[110px] leading-[0.85] font-black uppercase tracking-tighter text-white mb-8">
            БОЛЬШЕ<br/>
            ЧЕМ<br/>
            <span className="text-transparent stroke-text">ПРОСТО</span><br/>
            ДРУГ
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-md font-light leading-relaxed mb-8">
            Этот сайт — цифровая история о пути, амбициях и моментах, которые нас объединяют. Исследуй мир через призму его достижений.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-red-600 text-black font-black uppercase tracking-widest text-[11px] hover:bg-white transition-colors">
              Начать скроллинг
            </button>
            <button className="px-8 py-4 border border-white/10 text-white font-black uppercase tracking-widest text-[11px] hover:bg-white/10 transition-colors">
              Смотреть галерею
            </button>
          </div>
        </motion.div>

        {/* Right: Floating 3D/Glass Composition */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="col-span-1 lg:col-span-6 relative w-full h-[500px] lg:h-[650px] flex justify-center items-center"
        >
          {/* Glass Container */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-md aspect-[4/5] bg-gradient-to-tr from-zinc-900 to-zinc-800 rounded-2xl border border-white/10 overflow-hidden flex flex-col z-10"
          >
            {/* Inner frame/glare */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-30 mix-blend-overlay pointer-events-none" />
            
            {/* The Photo */}
            <div className="relative w-full h-full bg-black grid place-items-center">
              {/* Fallback image if user hasn't added theirs yet */}
              <Image 
                src="/photo_5357056260005632071_w_edit_72711856248980.jpg" 
                alt="Alex Portrait"
                fill
                className="object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>

            {/* Floating UI element inside container */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex justify-between items-end">
                <div className="text-sm uppercase tracking-widest">
                  <div className="text-red-500 font-bold mb-1">ОБЪЕКТ</div>
                  <div className="text-white font-medium">Арсен С.</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-[10px] uppercase text-gray-400 mt-1">LOYALTY</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Decorative geometric blur shapes behind the glass */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute top-[10%] -left-[10%] w-64 h-64 rounded-full bg-red-600/20 blur-[80px] z-0" 
          />
          <motion.div 
             animate={{ rotate: -360 }}
             transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
             className="absolute -bottom-[5%] -right-[5%] w-72 h-72 rounded-full bg-purple-900/20 blur-[80px] z-0" 
          />
        </motion.div>

      </div>
    </section>
  );
}
