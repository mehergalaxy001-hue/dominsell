import { ShieldCheck, CreditCard, KeyRound, CheckCircle, ExternalLink } from 'lucide-react';
import { getSedoListingUrl } from '../utils/domainOffer';

export function SedoEscrowTimeline() {
  const sedoUrl = getSedoListingUrl('watersort.in');

  const steps = [
    {
      num: '1',
      title: 'Pay Safely via Sedo Escrow',
      desc: 'You pay Sedo using Credit Card, Bank Wire, or PayPal. Sedo safely holds the money in escrow so your funds are 100% protected.',
      icon: CreditCard,
    },
    {
      num: '2',
      title: 'Domain Code is Sent',
      desc: 'The seller sends the official EPP Authorization Code to Sedo and authorizes the transfer to your registrar (GoDaddy, Namecheap, etc.).',
      icon: KeyRound,
    },
    {
      num: '3',
      title: 'You Receive Full Ownership',
      desc: 'The domain appears in your account and you take 100% control of DNS. Only after you confirm receipt does Sedo release the funds to the seller.',
      icon: CheckCircle,
    },
  ];

  return (
    <section id="transfer" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Sedo Buyer Protection</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            How Does the Transfer Work?
          </h2>
          <p className="text-slate-600 text-sm mt-1.5">
            You don't need to send money to a stranger. Sedo is a regulated global domain escrow service that protects both buyer and seller.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-slate-50 border border-slate-200 rounded-xl p-6 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
                      {step.num}
                    </div>
                    <Icon className="w-5 h-5 text-slate-400" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-8 p-4 bg-emerald-50/60 border border-emerald-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-emerald-900">
          <span className="font-medium text-center sm:text-left">
            ✓ 0% Buyer Commission · Free Escrow Protection · Usually completed in 24-48 hours
          </span>
          <a
            href={sedoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-bold text-emerald-700 hover:text-emerald-900 underline whitespace-nowrap"
          >
            <span>View Sedo Listing</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
