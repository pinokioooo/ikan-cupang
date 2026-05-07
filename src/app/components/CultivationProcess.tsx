import { Heart, Droplets, Baby, TrendingUp, Fish } from 'lucide-react';

const steps = [
  {
    icon: Fish,
    title: 'Pemilihan Indukan',
    description: 'Pilih indukan cupang berkualitas dengan warna cerah, sirip sempurna, dan kesehatan optimal. Pastikan usia minimal 4-6 bulan.',
  },
  {
    icon: Heart,
    title: 'Proses Breeding',
    description: 'Pertemukan jantan dan betina dalam kondisi terkontrol. Jantan akan membuat sarang busa sebagai tempat telur.',
  },
  {
    icon: Droplets,
    title: 'Perawatan Telur',
    description: 'Setelah pemijahan, pisahkan betina. Jantan akan merawat telur hingga menetas dalam 24-48 jam.',
  },
  {
    icon: Baby,
    title: 'Perawatan Burayak',
    description: 'Beri pakan infusoria dan artemia untuk burayak. Jaga kualitas air dan suhu optimal 26-28°C.',
  },
  {
    icon: TrendingUp,
    title: 'Fase Pertumbuhan',
    description: 'Pisahkan ikan jantan di usia 3-4 bulan untuk mencegah perkelahian. Tingkatkan kualitas pakan untuk hasil optimal.',
  },
];

export function CultivationProcess() {
  return (
    <section id="process" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <span className="text-cyan-400 uppercase tracking-wider text-sm font-semibold">Proses Budidaya</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            5 Tahapan Budidaya Cupang
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Ikuti langkah-langkah profesional untuk menghasilkan ikan cupang berkualitas premium
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative p-6 bg-slate-900/50 rounded-xl border border-slate-800/50 hover:border-cyan-500/30 transition-all h-full flex flex-col">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4 border border-cyan-500/30">
                    <Icon className="w-7 h-7 text-cyan-400" />
                  </div>

                  <div className="flex-1">
                    <div className="text-sm text-cyan-400 font-semibold mb-2">Tahap {index + 1}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
