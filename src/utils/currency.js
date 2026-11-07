const CURRENCY = 'USD';
const LOCALE = 'en-US';

export function formatCurrency(amount) {
  return new Intl.NumberFormat(LOCALE, {
    style: 'currency',
    currency: CURRENCY,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number(amount) || 0);
}

export default formatCurrency;