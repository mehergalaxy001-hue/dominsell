import { Gamepad2, Search, Smartphone, ShieldCheck } from 'lucide-react';

export function MarketValueBento() {
  const benefits = [
    {
      title: 'Exact-Match Category Name',
      desc: 'Water Sort is one of the most played casual puzzle games in the world (500M+ app store downloads). Owning the exact name watersort.in gives your game or web portal instant recognition and organic search authority.',
      icon: Search,
      tag: 'High Search Demand',
    },
    {
      title: 'India’s Massive Mobile Gaming Market',
      desc: 'India has over 500 million mobile gamers and is the world’s largest market for mobile game downloads. The official .in extension builds instant trust with Indian gamers and tech companies.',
      icon: Smartphone,
      tag: '500M+ Indian Gamers',
    },
    {
      title: 'Short, Clean & Brandable',
      desc: 'Just 9 letters, 2 words, no dashes or confusing numbers. It looks clean on app store listings, business cards, social media, and web ads.',
      icon: Gamepad2,
      tag: 'Clean 9 Letters',
    },
    {
      title: 'Safe Purchase & Fast Handover',
      desc: 'You buy securely through Sedo Escrow. The seller does not get paid until the domain is safely inside your GoDaddy, Namecheap, or other registrar account.',
      icon: ShieldCheck,
      tag: '100% Sedo Protection',
    },
  ];

  return (
    <section id="why-this-domain" className="py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Why is watersort.in a good investment?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            A premium, memorable domain helps you save money on marketing and establishes instant trust with your players.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
