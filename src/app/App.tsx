import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CultivationProcess } from './components/CultivationProcess';
import { BettaVarieties } from './components/BettaVarieties';
import { Maintenance } from './components/Maintenance';
import { Benefits } from './components/Benefits';
import { Gallery } from './components/Gallery';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navbar />
      <Hero />
      <About />
      <CultivationProcess />
      <BettaVarieties />
      <Maintenance />
      <Benefits />
      <Gallery />
      <FinalCTA />
      <Footer />
    </div>
  );
}
