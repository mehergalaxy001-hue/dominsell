import { ExternalLink, ShieldCheck, Mail, ArrowRight, Check } from 'lucide-react';
import { getSedoListingUrl } from '../utils/domainOffer';

interface HeroSectionProps {
  onScrollToContact: () => void;
  onScrollToDemo: () => void;
}

export function HeroSection({ onScrollToContact, onScrollToDemo }: HeroSectionProps) {
  const sedoUrl = getSedoListingUrl('watersort.in');
  const sellerEmail = 'support@watersort.in';

  return (
    <section id="overview" className="pt-10 pb-16 lg:pt-16 lg:pb-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Trust pill */}
        <div className="flex items-center justify-center gap-2 text-xs text-slate-600 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Verified Listing on Sedo.com</span>
          </span>
          <span className="text-slate-300" aria-hidden="true">·</span>
          <span>Fast EPP Authorization Transfer</span>
        </div>

        {/* Main Title & Clear Pitch */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-4">
            The domain <span className="text-blue-600 underline decoration-blue-200 underline-offset-6">watersort.in</span> is for sale
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            The definitive exact-match category domain for water sort puzzle games in India. Simple, memorable, and ready for instant transfer.
          </p>

          {/* Pricing Card */}
          <div className="mt-8 max-w-lg mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 text-center shadow-xs">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">
              Buy Now Price
            </span>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 tabular-nums">
                $800
              </span>
              <span className="text-slate-500 font-medium text-lg">USD</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              (Approx. ₹69,000 INR · €740 EUR · No hidden buyer fees on Sedo)
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={sedoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-xs"
              >
                <span>Buy Now for $800 on Sedo</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onScrollToContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-colors"
              >
                <span>Make an Offer</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
              <span className="inline-flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Safe Sedo Escrow</span>
              </span>
              <span className="inline-flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero Buyer Commission</span>
              </span>
              <span className="inline-flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Transfer to Any Registrar</span>
              </span>
            </div>
          </div>

          {/* Quick Demo Anchor */}
          <div className="mt-4">
            <button
              type="button"
              onClick={onScrollToDemo}
              className="text-xs text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1"
            >
              <span>Want to see how water sort puzzle looks? Try the interactive preview below</span>
              <span>↓</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
