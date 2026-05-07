import { ArrowRight, BookOpen } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-20 px-6 bg-slate-900/30">
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
          <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 rounded-3xl border border-slate-800/50 p-12 lg:p-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-semibold">Mulai Perjalanan Anda</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Siap Memulai Budidaya
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mt-2">
                Ikan Cupang Premium?
              </span>
            </h2>

            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Bergabunglah dengan ribuan peternak sukses. Dapatkan panduan lengkap, tips profesional, dan dukungan komunitas untuk kesuksesan budidaya Anda.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-lg rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2 group">
                Mulai Belajar Sekarang
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-4 bg-slate-800/50 text-white text-lg rounded-xl hover:bg-slate-800 transition-all border border-slate-700">
                Hubungi Kami
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-slate-800/50">
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">5,000+</div>
                <div className="text-slate-400">Peternak Aktif</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">100+</div>
                <div className="text-slate-400">Panduan Premium</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-slate-400">Dukungan Komunitas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
