import { ExternalLink, Mail } from 'lucide-react';
import { getSedoListingUrl } from '../utils/domainOffer';

export function Footer() {
  const sedoUrl = getSedoListingUrl('watersort.in');
  const sellerEmail = 'support@watersort.in';

  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 py-10 text-xs sm:text-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 mb-1 justify-center sm:justify-start">
              <span className="text-lg font-bold text-slate-900">
                watersort<span className="text-blue-600">.in</span>
              </span>
              <span className="text-xs bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded font-medium">
                For Sale · $800 USD
              </span>
            </div>
            <p className="text-xs text-slate-500 text-center sm:text-left">
              Listed and safely transacted via Sedo.com Escrow.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-slate-600">
            <a href="#overview" className="hover:text-slate-900 transition-colors">
              Overview
            </a>
            <a href="#why-this-domain" className="hover:text-slate-900 transition-colors">
              Why This Domain
            </a>
            <a href="#demo" className="hover:text-slate-900 transition-colors">
              Demo
            </a>
            <a href="#transfer" className="hover:text-slate-900 transition-colors">
              Transfer Process
            </a>
            <a href="#faq" className="hover:text-slate-900 transition-colors">
              FAQ
            </a>
            <a
              href={`mailto:${sellerEmail}?subject=Domain%20Inquiry%3A%20watersort.in`}
              className="hover:text-blue-600 font-medium inline-flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Seller</span>
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} watersort.in. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Escrow & Transfer Powered by</span>
            <a
              href={sedoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center gap-0.5"
            >
              <span>Sedo.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
