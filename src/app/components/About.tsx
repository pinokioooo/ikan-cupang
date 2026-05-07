import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl blur-2xl"></div>
            <div className="relative rounded-2xl overflow-hidden border border-slate-800/50">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1636045466232-539c7bd7817e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcXVhcml1bSUyMGZpc2glMjB0YW5rJTIwd2F0ZXIlMjBwbGFudHN8ZW58MXx8fHwxNzc4MTU2Nzc5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Betta Fish Aquarium"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <div className="space-y-2">
              <span className="text-cyan-400 uppercase tracking-wider text-sm font-semibold">Tentang Budidaya Cupang</span>
              <h2 className="text-4xl font-bold text-white">
                Apa Itu Budidaya Ikan Cupang?
              </h2>
            </div>

            <p className="text-lg text-slate-300 leading-relaxed">
              Budidaya ikan cupang adalah proses pemeliharaan dan pengembangbiakan ikan hias Betta splendens secara terencana dan terkontrol. Ikan cupang dikenal dengan keindahan warna, bentuk sirip yang spektakuler, dan karakteristik uniknya.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              Sebagai salah satu ikan hias paling populer di dunia, cupang menawarkan peluang bisnis yang menjanjikan sekaligus hobi yang memuaskan. Dengan teknik budidaya yang tepat, Anda dapat menghasilkan cupang berkualitas premium dengan nilai jual tinggi.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-cyan-400">500+</div>
                <div className="text-slate-400">Varietas Cupang</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-cyan-400">Mudah</div>
                <div className="text-slate-400">Untuk Pemula</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
