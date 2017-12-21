declare module "locale-currency" {
  export function getCurrency(locale: string): string;
  export function getLocales(): string[];
  export function getCountryCode(locale: string): string;
}
