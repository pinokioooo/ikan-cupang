import { Sparkles, TrendingUp, DollarSign, GraduationCap } from 'lucide-react';

const benefits = [
  {
    icon: Sparkles,
    title: 'Nilai Ornamental Tinggi',
    stat: '95%',
    description: 'Cupang premium dapat mencapai harga jutaan rupiah per ekor dengan keindahan yang memukau.',
  },
  {
    icon: TrendingUp,
    title: 'Potensi Budidaya',
    stat: '500+',
    description: 'Satu pasang indukan dapat menghasilkan ratusan anakan dalam sekali breeding.',
  },
  {
    icon: DollarSign,
    title: 'Permintaan Pasar',
    stat: 'Stabil',
    description: 'Pasar domestik dan internasional terus berkembang dengan demand yang konsisten.',
  },
  {
    icon: GraduationCap,
    title: 'Ramah Pemula',
    stat: 'Mudah',
    description: 'Cocok untuk pemula dengan modal kecil dan perawatan yang relatif sederhana.',
  },
];

export function Benefits() {
  return (
    <section className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <span className="text-cyan-400 uppercase tracking-wider text-sm font-semibold">Peluang & Keuntungan</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Mengapa Budidaya Cupang?
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Peluang bisnis menjanjikan dengan investasi minimal dan hasil maksimal
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative p-8 bg-gradient-to-br from-slate-900/80 to-slate-800/50 rounded-2xl border border-slate-800/50 hover:border-cyan-500/30 transition-all">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-xl flex items-center justify-center mb-6 border border-cyan-500/40">
                    <Icon className="w-7 h-7 text-cyan-400" />
                  </div>

                  <div className="text-4xl font-bold text-cyan-400 mb-2">{benefit.stat}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
