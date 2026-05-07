import { ImageWithFallback } from './figma/ImageWithFallback';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1543145334-8be4a6b8fc7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxiZXR0YSUyMGZpc2glMjBzaWFtZXNlJTIwZmlnaHRpbmclMjBmaXNoJTIwY29sb3JmdWx8ZW58MXx8fHwxNzc4MTU2Nzc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Black and Red Betta',
  },
  {
    url: 'https://images.unsplash.com/photo-1582662824576-2bbed5a932c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxiZXR0YSUyMGZpc2glMjBzaWFtZXNlJTIwZmlnaHRpbmclMjBmaXNoJTIwY29sb3JmdWx8ZW58MXx8fHwxNzc4MTU2Nzc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Orange and Purple Betta',
  },
  {
    url: 'https://images.unsplash.com/photo-1635068130943-f05acd7460c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8YmV0dGElMjBmaXNoJTIwc2lhbWVzZSUyMGZpZ2h0aW5nJTIwZmlzaCUyMGNvbG9yZnVsfGVufDF8fHx8MTc3ODE1Njc3OXww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Blue and Yellow Betta',
  },
  {
    url: 'https://images.unsplash.com/photo-1636045466122-90fa0ce0eb8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhcXVhcml1bSUyMGZpc2glMjB0YW5rJTIwd2F0ZXIlMjBwbGFudHN8ZW58MXx8fHwxNzc4MTU2Nzc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Aquarium Setup',
  },
  {
    url: 'https://images.unsplash.com/photo-1636045466216-089c502a3905?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxhcXVhcml1bSUyMGZpc2glMjB0YW5rJTIwd2F0ZXIlMjBwbGFudHN8ZW58MXx8fHwxNzc4MTU2Nzc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Fish Tank Environment',
  },
  {
    url: 'https://images.unsplash.com/photo-1578313097818-dfe8d38aa758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxhcXVhcml1bSUyMGZpc2glMjB0YW5rJTIwd2F0ZXIlMjBwbGFudHN8ZW58MXx8fHwxNzc4MTU2Nzc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Planted Aquarium',
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <span className="text-cyan-400 uppercase tracking-wider text-sm font-semibold">Galeri Budidaya</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Aktivitas Budidaya Cupang
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Lihat keindahan dan proses budidaya ikan cupang premium
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative aspect-square overflow-hidden rounded-2xl border border-slate-800/50 hover:border-cyan-500/30 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
              <ImageWithFallback
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
