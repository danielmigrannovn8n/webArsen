'use client';

import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Plans from '@/components/sections/Plans';
import Gallery from '@/components/sections/Gallery';

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Stats />
      <Plans />
      <Gallery />
    </div>
  );
}
