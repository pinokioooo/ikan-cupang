import { Fish, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-16 px-6 bg-slate-950 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Fish className="w-8 h-8 text-cyan-400" />
              <span className="text-xl font-semibold text-white">Budidaya Cupang</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Platform edukasi dan panduan lengkap budidaya ikan cupang premium untuk kesuksesan Anda.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Navigasi</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-slate-400 hover:text-cyan-400 transition-colors">Tentang</a></li>
              <li><a href="#process" className="text-slate-400 hover:text-cyan-400 transition-colors">Proses Budidaya</a></li>
              <li><a href="#varieties" className="text-slate-400 hover:text-cyan-400 transition-colors">Jenis Cupang</a></li>
              <li><a href="#maintenance" className="text-slate-400 hover:text-cyan-400 transition-colors">Perawatan</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Sumber Daya</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Panduan Pemula</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Tips & Trik</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Komunitas</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-slate-400">
                <Mail className="w-4 h-4 text-cyan-400" />
                info@budidayacupang.com
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <Phone className="w-4 h-4 text-cyan-400" />
                +62 812-3456-7890
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-cyan-400" />
                Jakarta, Indonesia
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © 2026 Budidaya Cupang. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Kebijakan Privasi</a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
