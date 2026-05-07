import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
              <span className="text-cyan-400 text-sm">Panduan Lengkap Budidaya Ikan Cupang</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Mulai Budidaya
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Ikan Cupang
              </span>
              Premium Anda
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed">
              Pelajari teknik breeding profesional, perawatan optimal, dan peluang bisnis dari budidaya ikan cupang hias berkualitas tinggi.
            </p>

            <div className="flex gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all shadow-xl shadow-cyan-500/25 flex items-center gap-2 group">
                Pelajari Sekarang
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-slate-800/50 text-white rounded-lg hover:bg-slate-800 transition-all border border-slate-700">
                Lihat Galeri
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden border border-slate-800/50 shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1553986187-00635180f7c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZXR0YSUyMGZpc2glMjBzaWFtZXNlJTIwZmlnaHRpbmclMjBmaXNoJTIwY29sb3JmdWx8ZW58MXx8fHwxNzc4MTU2Nzc5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Premium Betta Fish"
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
