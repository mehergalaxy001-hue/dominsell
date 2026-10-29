import { ExternalLink } from 'lucide-react';
import { getSedoListingUrl } from '../utils/domainOffer';

export function Navbar() {
  const sedoUrl = getSedoListingUrl('watersort.in');

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/95 border-b border-slate-200 shadow-xs">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-3.5">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="/"
          className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 flex items-center"
        >
          <span>watersort</span>
          <span className="text-blue-600 font-extrabold">.in</span>
        </a>

        {/* Zone 2: 4 clean single-line nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a
            href="#overview"
            className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
          >
            Overview
          </a>
          <a
            href="#why-this-domain"
            className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
          >
            Why This Domain
          </a>
          <a
            href="#demo"
            className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
          >
            Play Demo
          </a>
          <a
            href="#transfer"
            className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
          >
            How Transfer Works
          </a>
          <a
            href="#faq"
            className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
          >
            FAQ
          </a>
        </nav>

        {/* Zone 3: 1 primary action with exact $800 price */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={sedoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-xs whitespace-nowrap shrink-0"
          >
            <span>Buy Now on Sedo ($800)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
