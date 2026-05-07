import { Fish } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Fish className="w-8 h-8 text-cyan-400" />
            <span className="text-xl font-semibold text-white">Budidaya Cupang</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-slate-300 hover:text-cyan-400 transition-colors">Tentang</a>
            <a href="#process" className="text-slate-300 hover:text-cyan-400 transition-colors">Proses</a>
            <a href="#varieties" className="text-slate-300 hover:text-cyan-400 transition-colors">Jenis Cupang</a>
            <a href="#maintenance" className="text-slate-300 hover:text-cyan-400 transition-colors">Perawatan</a>
            <a href="#gallery" className="text-slate-300 hover:text-cyan-400 transition-colors">Galeri</a>
          </div>

          <button className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all shadow-lg shadow-cyan-500/25">
            Mulai Belajar
          </button>
        </div>
      </div>
    </nav>
  );
}
