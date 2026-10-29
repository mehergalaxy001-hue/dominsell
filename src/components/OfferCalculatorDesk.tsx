import { useState } from 'react';
import {
  CurrencyCode,
  CURRENCIES,
  validateOffer,
  calculateSedoBreakdown,
  getSedoListingUrl,
  convertAmount,
} from '../utils/domainOffer';
import {
  ShieldCheck,
  CheckCircle2,
  Copy,
  ExternalLink,
  Mail,
  AlertCircle,
  Send,
} from 'lucide-react';

export function OfferCalculatorDesk() {
  const [currency, setCurrency] = useState<CurrencyCode>('USD');
  const [offerAmount, setOfferAmount] = useState<number>(800);
  const [buyerName, setBuyerName] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [buyerMessage, setBuyerMessage] = useState(
    'Hi, I am interested in acquiring watersort.in for our gaming project. Please let me know the transfer details.'
  );

  const [validationError, setValidationError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const currentConfig = CURRENCIES[currency];
  const sedoUrl = getSedoListingUrl('watersort.in');
  const sellerEmail = 'support@watersort.in';

  const handleCurrencyChange = (newCur: CurrencyCode) => {
    if (newCur === currency) return;
    const converted = convertAmount(offerAmount, currency, newCur);
    setCurrency(newCur);
    setOfferAmount(converted);
    setValidationError(null);
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(`Acquisition Offer for watersort.in - ${currentConfig.symbol}${offerAmount.toLocaleString()} ${currency}`);
    const body = encodeURIComponent(
      `Hello,\n\nI am interested in purchasing the domain watersort.in.\n\n` +
      `My Details:\n` +
      `- Name: ${buyerName || 'Prospective Buyer'}\n` +
      `- Contact Email: ${buyerEmail}\n` +
      `- Offer Amount: ${currentConfig.symbol}${offerAmount.toLocaleString()} ${currency}\n\n` +
      `Message / Terms:\n${buyerMessage}\n\n` +
      `I look forward to your response regarding transfer via Sedo Escrow.`
    );
    return `mailto:${sellerEmail}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateOffer(offerAmount, currency, buyerEmail);
    if (!result.isValid) {
      setValidationError(result.error || 'Please enter valid details');
      return;
    }
    setValidationError(null);
    setSubmitted(true);
    // Open buyer email client directly to support@watersort.in
    try {
      window.location.href = getMailtoLink();
    } catch {
      // fallback
    }
  };

  const handleCopySummary = () => {
    const summary = `Domain Inquiry: watersort.in
From: ${buyerName || 'Prospective Buyer'} (${buyerEmail})
Offer Amount: ${currentConfig.symbol}${offerAmount.toLocaleString()} ${currency}
Message: ${buyerMessage}
Sedo Listing: ${sedoUrl}`;

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact-desk" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Purchase or Contact the Seller
          </h2>
          <p className="text-slate-600 text-sm mt-1.5">
            You can buy instantly for $800 on Sedo, or send a direct message below to discuss transfer details.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Buy Now Box */}
          <div className="md:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Current Buy Now Price
              </span>
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Save $1,200 (60% Off)
              </span>
            </div>

            <div className="flex items-center gap-2.5 mb-1">
              <span className="text-xl text-slate-400 line-through decoration-red-500 decoration-2 font-bold tabular-nums">
                $2,000
              </span>
              <span className="text-slate-400 font-bold">→</span>
              <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tabular-nums">
                $800
              </span>
              <span className="text-blue-600 font-bold text-sm">USD</span>
            </div>

            <p className="text-xs text-slate-500 mb-3">
              Approx. ₹69,000 INR · €740 EUR
            </p>

            <div className="mb-4 p-2.5 bg-amber-50 border border-amber-200 rounded-lg text-[11px] text-amber-800 leading-snug">
              <strong>Price Alert:</strong> Price will be updated to <strong>$2,000 USD</strong> in 6 months. Lock in $800 today on Sedo.
            </div>

            <a
              href={sedoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-xs mb-4"
            >
              <span>Buy on Sedo for $800</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <div className="space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-4">
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Immediate ownership authorization</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Zero buyer fee (Sedo Escrow included)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Supported on any domain registrar</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-center">
              <a
                href={`mailto:${sellerEmail}?subject=Inquiry%20regarding%20watersort.in`}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-900"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>Email seller: {sellerEmail}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Inquire / Offer Form */}
          <div className="md:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Send an Offer or Question
                  </h3>
                  <p className="text-xs text-slate-500">
                    If you have a question or counter-offer, send a note directly to the owner.
                  </p>
                </div>

                {validationError && (
                  <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{validationError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="buyerNameInput" className="text-xs font-medium text-slate-700 block mb-1">
                      Your Name
                    </label>
                    <input
                      id="buyerNameInput"
                      type="text"
                      required
                      value={buyerName}
                      onChange={(e) => setBuyerName(e.target.value)}
                      placeholder="e.g. John Doe / Studio Lead"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-sm focus:border-blue-500 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="buyerEmailInput" className="text-xs font-medium text-slate-700 block mb-1">
                      Your Email
                    </label>
                    <input
                      id="buyerEmailInput"
                      type="email"
                      required
                      value={buyerEmail}
                      onChange={(e) => {
                        setBuyerEmail(e.target.value);
                        setValidationError(null);
                      }}
                      placeholder="name@example.com"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-sm focus:border-blue-500 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                {/* Offer amount & currency */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label htmlFor="offerAmountInput" className="text-xs font-medium text-slate-700">
                      Offer Amount ({currency})
                    </label>
                    <div className="flex items-center gap-1 text-[11px]">
                      {(['USD', 'INR', 'EUR'] as CurrencyCode[]).map((c) => (
                        <button
                          key={c}
                          type="button"
                          onClick={() => handleCurrencyChange(c)}
                          className={`px-1.5 py-0.5 rounded ${
                            currency === c
                              ? 'bg-slate-900 text-white font-semibold'
                              : 'text-slate-500 hover:text-slate-900'
                          }`}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500 font-bold text-sm">
                      {currentConfig.symbol}
                    </span>
                    <input
                      id="offerAmountInput"
                      type="number"
                      min={currentConfig.minOffer}
                      value={offerAmount || ''}
                      onChange={(e) => {
                        const val = parseInt(e.target.value, 10);
                        setOfferAmount(isNaN(val) ? 0 : val);
                        setValidationError(null);
                      }}
                      className="w-full pl-8 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-sm font-semibold focus:border-blue-500 focus:bg-white focus:outline-none tabular-nums"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="buyerMessageInput" className="text-xs font-medium text-slate-700 block mb-1">
                    Message
                  </label>
                  <textarea
                    id="buyerMessageInput"
                    rows={3}
                    value={buyerMessage}
                    onChange={(e) => setBuyerMessage(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-sm focus:border-blue-500 focus:bg-white focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Inquiry</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-6">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Message Sent!</h4>
                <p className="text-xs text-slate-600 mb-4 max-w-sm mx-auto">
                  Thank you, <strong>{buyerName}</strong>. Your inquiry for <strong>watersort.in</strong> at{' '}
                  <strong>{currentConfig.symbol}{offerAmount.toLocaleString()} {currency}</strong> has been received.
                </p>

                <div className="space-y-2">
                  <a
                    href={getMailtoLink()}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email Directly to support@watersort.in</span>
                  </a>

                  <a
                    href={sedoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                  >
                    <span>View Sedo Listing to Buy Now</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                  >
                    <Copy className="w-3 h-3" />
                    <span>{copied ? 'Copied to Clipboard!' : 'Copy Inquiry Summary'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-[11px] text-slate-500 hover:text-slate-700 underline pt-1 block mx-auto"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
