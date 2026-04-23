'use client';

export default function Footer() {
  return (
    <footer className="relative py-12 w-full overflow-hidden border-t border-white/5 bg-[#030303]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 flex justify-between items-center text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
        <div>
          © {new Date().getFullYear()} Arsen Profile <span className="text-red-600">/</span> All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
