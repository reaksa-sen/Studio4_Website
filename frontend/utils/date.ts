import differenceInYears from 'date-fns/differenceInYears';

/**
 * Return date format
 */
export function dateFormat(date: string, locale: string) {
  return new Date(date).toLocaleDateString(locale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
}

/**
 * Calculate Age
 */
export function calculateAge(date: string) {
  return differenceInYears(new Date(), new Date(date));
}
