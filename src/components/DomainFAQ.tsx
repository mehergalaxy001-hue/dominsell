import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'How much does watersort.in cost?',
    answer:
      'The current limited-time Buy Now price is $800 USD (discounted 60% from its standard $2,000 valuation). The price is scheduled to increase to $2,000 USD in 6 months due to rising organic search traffic. You can buy it immediately on Sedo.com or submit an offer.',
  },
  {
    question: 'How is the payment and domain transfer protected?',
    answer:
      'The sale is handled securely through Sedo.com escrow. Sedo holds your money in a protected account until the seller delivers the authorization code and the domain is safely transferred to you. Buyers pay 0% fees on Sedo.',
  },
  {
    question: 'Can I transfer the domain to GoDaddy, Namecheap, or Google/Squarespace?',
    answer:
      'Yes. watersort.in can be transferred to any ICANN-accredited registrar of your choice, including GoDaddy, Namecheap, BigRock, Dynadot, Porkbun, or Hostinger.',
  },
  {
    question: 'Can international buyers outside of India own a .IN domain?',
    answer:
      'Yes. The .in registry has no residency or citizenship requirements. Any individual, game developer, or company worldwide can own a .in domain.',
  },
  {
    question: 'How long does the domain transfer take?',
    answer:
      'Once payment is verified by Sedo, the transfer authorization code is released and the domain is typically in your account within 24 to 48 hours.',
  },
];

export function DomainFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm mt-1.5">
            Clear answers on buying and transferring watersort.in safely.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-slate-50 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 text-sm sm:text-base focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-200/60 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
