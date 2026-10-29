export type CurrencyCode = 'USD' | 'INR' | 'EUR';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  rateToUSD: number;
  buyNowPrice: number;
  minOffer: number;
}

export const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  USD: {
    code: 'USD',
    symbol: '$',
    rateToUSD: 1,
    buyNowPrice: 800,
    minOffer: 350,
  },
  INR: {
    code: 'INR',
    symbol: '₹',
    rateToUSD: 0.0116, // approx 1 USD = 86.2 INR
    buyNowPrice: 69000,
    minOffer: 30000,
  },
  EUR: {
    code: 'EUR',
    symbol: '€',
    rateToUSD: 1.08,
    buyNowPrice: 740,
    minOffer: 325,
  },
};

export interface OfferValidationResult {
  isValid: boolean;
  error?: string;
}

export function validateOffer(
  amount: number,
  currency: CurrencyCode,
  email: string
): OfferValidationResult {
  const config = CURRENCIES[currency];
  if (!amount || isNaN(amount) || amount <= 0) {
    return { isValid: false, error: 'Please enter a valid amount.' };
  }
  if (amount < config.minOffer) {
    return {
      isValid: false,
      error: `Minimum starting offer is ${config.symbol}${config.minOffer.toLocaleString()} ${currency}.`,
    };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email.trim())) {
    return { isValid: false, error: 'Please enter a valid contact email address.' };
  }
  return { isValid: true };
}

export function convertAmount(
  amount: number,
  from: CurrencyCode,
  to: CurrencyCode
): number {
  if (from === to) return amount;
  const inUSD = amount * CURRENCIES[from].rateToUSD;
  const target = inUSD / CURRENCIES[to].rateToUSD;
  return Math.round(target);
}

export function calculateSedoBreakdown(amount: number, currency: CurrencyCode) {
  const config = CURRENCIES[currency];
  const buyerFee = 0;
  const totalPayable = amount;
  const escrowProtectionIncluded = true;
  const freeOwnershipTransferIncluded = true;

  return {
    symbol: config.symbol,
    currency,
    offerAmount: amount,
    buyerFee,
    totalPayable,
    escrowProtectionIncluded,
    freeOwnershipTransferIncluded,
  };
}

export function getSedoListingUrl(domain: string = 'watersort.in'): string {
  return `https://sedo.com/search/details/?domain=${encodeURIComponent(domain)}`;
}
