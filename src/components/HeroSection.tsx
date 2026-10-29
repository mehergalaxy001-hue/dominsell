import { ExternalLink, ShieldCheck, ArrowRight, Check, TrendingUp, Sparkles, Clock, DollarSign, Award } from 'lucide-react';
import { getSedoListingUrl } from '../utils/domainOffer';

interface HeroSectionProps {
  onScrollToContact: () => void;
  onScrollToDemo: () => void;
}

export function HeroSection({ onScrollToContact, onScrollToDemo }: HeroSectionProps) {
  const sedoUrl = getSedoListingUrl('watersort.in');

  return (
    <section id="overview" className="pt-10 pb-16 lg:pt-16 lg:pb-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Trust badge */}
        <div className="flex items-center justify-center gap-2 text-xs text-slate-600 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Verified Listing on Sedo.com</span>
          </span>
          <span className="text-slate-300" aria-hidden="true">·</span>
          <span>Fast EPP Authorization Transfer</span>
        </div>

        {/* Main Title & Pitch */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-4">
            The domain <span className="text-blue-600 underline decoration-blue-200 underline-offset-6">watersort.in</span> is for sale
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            The definitive exact-match category domain for water sort puzzle games in India. Simple, memorable, and ready for instant transfer.
          </p>

          {/* Pricing Card with $2,000 -> $800 Strike-Through */}
          <div className="mt-8 max-w-xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 text-center shadow-xs relative overflow-hidden">
            {/* Top promotional pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Limited-Time Offer · Save $1,200 (60% Off)</span>
            </div>

            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">
              Acquisition Price
            </span>

            {/* Unique Strike-through Display */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 my-2">
              <div className="flex items-baseline gap-1 text-slate-400 line-through decoration-red-500 decoration-2">
                <span className="text-2xl sm:text-3xl font-bold tabular-nums">$2,000</span>
                <span className="text-xs font-medium uppercase">USD</span>
              </div>
              <span className="text-slate-400 font-bold text-xl">→</span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 tabular-nums">
                  $800
                </span>
                <span className="text-blue-600 font-bold text-lg">USD</span>
              </div>
            </div>

            <p className="text-xs text-slate-500 mt-1">
              (Approx. ₹69,000 INR · €740 EUR · No buyer commission on Sedo)
            </p>

            {/* 6-Month Price Increase Notice */}
            <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-2.5 text-left text-xs text-amber-900">
              <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong>Notice of Price Increase:</strong> In 6 months, this domain will be re-listed at its full standard valuation of <strong>$2,000 USD</strong> as the Indian gaming sector continues its rapid expansion. Buy today at <strong>$800</strong> to lock in this special rate.
              </div>
            </div>

            {/* CTAs */}
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

        {/* Dedicated Section: Domain Power & Valuation Justification */}
        <div className="mt-16 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>Valuation & Domain Power</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Why is watersort.in worth this price? (The Domain Power)
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Domain names are digital real estate. Here is the clear math and business logic behind why watersort.in is a high-value category asset:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 mb-2 font-bold text-slate-900 text-base">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                <span>1. Thousands of Dollars Saved in Google Ads (Organic CAC)</span>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                "Water Sort" is searched over 1.5 million times each month. In mobile gaming, paying for search clicks (CPC) typically costs $0.20 to $0.80 per click. An exact-match domain like <strong>watersort.in</strong> naturally captures organic Google traffic for free, saving thousands of dollars every year in ongoing advertising costs.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 mb-2 font-bold text-slate-900 text-base">
                <DollarSign className="w-4 h-4 text-emerald-600" />
                <span>2. 500M+ Global Players Instant Brand Authority</span>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Water Sort is not an obscure word—it is one of the most downloaded casual puzzle franchises in history with over 500 million downloads. Any user in India typing or seeing <strong>watersort.in</strong> immediately knows what the site is about without confusion.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 mb-2 font-bold text-slate-900 text-base">
                <Award className="w-4 h-4 text-amber-600" />
                <span>3. One-Time Purchase vs. Perpetual Ad Expense</span>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                When you run ads on Meta or Google, the traffic disappears the moment you stop paying. When you buy <strong>watersort.in</strong> for $800, you own a permanent, exclusive asset forever with no monthly renewal surcharges.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 mb-2 font-bold text-slate-900 text-base">
                <Clock className="w-4 h-4 text-indigo-600" />
                <span>4. $2,000 Future Re-Listing Schedule</span>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                India's mobile gaming industry is growing at 28% annually. As premium .in names become scarcer, category-killer domains increase in value. In 6 months, the asking price will be increased to $2,000 USD to match market comps. Buying now secures a 60% discount.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
