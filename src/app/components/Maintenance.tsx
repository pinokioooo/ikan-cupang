import { Droplet, UtensilsCrossed, Waves, ShieldCheck } from 'lucide-react';

const maintenanceItems = [
  {
    icon: Droplet,
    title: 'Kualitas Air',
    description: 'Jaga pH 6.5-7.5, suhu 26-28°C, dan lakukan pergantian air 30% setiap minggu untuk kesehatan optimal.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Pemberian Pakan',
    description: 'Beri pakan berkualitas 2-3 kali sehari. Kombinasikan pelet, cacing, dan artemia untuk nutrisi seimbang.',
  },
  {
    icon: Waves,
    title: 'Perawatan Akuarium',
    description: 'Bersihkan sisa pakan dan kotoran rutin. Gunakan filter halus dan hindari arus air yang terlalu kuat.',
  },
  {
    icon: ShieldCheck,
    title: 'Pencegahan Penyakit',
    description: 'Karantina ikan baru, gunakan garam ikan untuk pencegahan, dan pantau perubahan perilaku atau fisik.',
  },
];

export function Maintenance() {
  return (
    <section id="maintenance" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <span className="text-cyan-400 uppercase tracking-wider text-sm font-semibold">Perawatan Cupang</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Panduan Perawatan Optimal
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Kunci sukses budidaya cupang terletak pada perawatan yang konsisten dan berkualitas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {maintenanceItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative p-8 bg-slate-900/50 rounded-2xl border border-slate-800/50 hover:border-cyan-500/30 transition-all text-center h-full flex flex-col">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-500/30">
                    <Icon className="w-8 h-8 text-cyan-400" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed flex-1">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
