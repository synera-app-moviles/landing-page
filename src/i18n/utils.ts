import { ui, defaultLang } from './index';

export function getStoredLanguage(): string {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('language') || defaultLang;
  }
  return defaultLang;
}

export function translate(lang: string, key: string): string {
  const keys = key.split('.');
  let value: any = ui[lang as keyof typeof ui];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
}
