import { ImageWithFallback } from './figma/ImageWithFallback';

const varieties = [
  {
    name: 'Halfmoon',
    description: 'Sirip ekor membentuk setengah lingkaran sempurna dengan sudut 180 derajat',
    image: 'https://images.unsplash.com/photo-1553986187-9cb16fa33483?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxiZXR0YSUyMGZpc2glMjBzaWFtZXNlJTIwZmlnaHRpbmclMjBmaXNoJTIwY29sb3JmdWx8ZW58MXx8fHwxNzc4MTU2Nzc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Crown Tail',
    description: 'Sirip bergerigi menyerupai mahkota dengan ekstensi ray yang menonjol',
    image: 'https://images.unsplash.com/photo-1593090018487-fd783ab4c1ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxiZXR0YSUyMGZpc2glMjBzaWFtZXNlJTIwZmlnaHRpbmclMjBmaXNoJTIwY29sb3JmdWx8ZW58MXx8fHwxNzc4MTU2Nzc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Plakat',
    description: 'Sirip pendek dan kompak, sangat aktif dengan bentuk tubuh atletis',
    image: 'https://images.unsplash.com/photo-1495594059084-33752639b9c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxiZXR0YSUyMGZpc2glMjBzaWFtZXNlJTIwZmlnaHRpbmclMjBmaXNoJTIwY29sb3JmdWx8ZW58MXx8fHwxNzc4MTU2Nzc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Double Tail',
    description: 'Memiliki dua lobus ekor terpisah dengan sirip punggung yang lebar',
    image: 'https://images.unsplash.com/photo-1619491202102-088c4afb271c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxiZXR0YSUyMGZpc2glMjBzaWFtZXNlJTIwZmlnaHRpbmclMjBmaXNoJTIwY29sb3JmdWx8ZW58MXx8fHwxNzc4MTU2Nzc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Veiltail',
    description: 'Sirip ekor panjang menjuntai seperti kerudung dengan gerakan anggun',
    image: 'https://images.unsplash.com/photo-1538719501547-bc023056a8b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxiZXR0YSUyMGZpc2glMjBzaWFtZXNlJTIwZmlnaHRpbmclMjBmaXNoJTIwY29sb3JmdWx8ZW58MXx8fHwxNzc4MTU2Nzc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Dumbo / Elephant Ear',
    description: 'Sirip dada sangat besar menyerupai telinga gajah yang unik',
    image: 'https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxiZXR0YSUyMGZpc2glMjBzaWFtZXNlJTIwZmlnaHRpbmclMjBmaXNoJTIwY29sb3JmdWx8ZW58MXx8fHwxNzc4MTU2Nzc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function BettaVarieties() {
  return (
    <section id="varieties" className="py-20 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <span className="text-cyan-400 uppercase tracking-wider text-sm font-semibold">Jenis-Jenis Cupang</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Varietas Cupang Premium
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Kenali berbagai jenis ikan cupang yang populer untuk budidaya dan koleksi
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {varieties.map((variety, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-slate-900/50 rounded-2xl border border-slate-800/50 overflow-hidden hover:border-cyan-500/30 transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={variety.image}
                    alt={variety.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-bold text-white">{variety.name}</h3>
                  <p className="text-slate-400 leading-relaxed">{variety.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
