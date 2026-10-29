import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MarketValueBento } from './components/MarketValueBento';
import { WaterSortDemo } from './components/WaterSortDemo';
import { SedoEscrowTimeline } from './components/SedoEscrowTimeline';
import { OfferCalculatorDesk } from './components/OfferCalculatorDesk';
import { DomainFAQ } from './components/DomainFAQ';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToContact = () => {
    const el = document.getElementById('contact-desk');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToDemo = () => {
    const el = document.getElementById('demo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900 font-sans">
      <Navbar />
      <main>
        <HeroSection
          onScrollToContact={scrollToContact}
          onScrollToDemo={scrollToDemo}
        />
        <MarketValueBento />
        <WaterSortDemo />
        <SedoEscrowTimeline />
        <OfferCalculatorDesk />
        <DomainFAQ />
      </main>
      <Footer />
    </div>
  );
}
