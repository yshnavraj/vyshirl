import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import es from './locales/es.json';
import te from './locales/te.json';
import hi from './locales/hi.json';

export const languages = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'te', label: 'తెలుగు' },
  { code: 'hi', label: 'हिन्दी' },
];
const supported = languages.map(language => language.code);
let saved;
try { saved = localStorage.getItem('vyshirl-language'); } catch { /* Storage may be disabled. */ }
const preferred = (navigator.languages || [navigator.language]).map(code => code.split('-')[0]);
const initial = supported.includes(saved) ? saved : preferred.find(code => supported.includes(code)) || 'en';

function updateDocument(language) {
  document.documentElement.lang = language;
  document.documentElement.dir = 'ltr';
  document.title = i18n.t('pageTitle');
  document.querySelector('meta[name="description"]')?.setAttribute('content', i18n.t('pageDescription'));
  try { localStorage.setItem('vyshirl-language', language); } catch { /* Switching still works without storage. */ }
}

i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, es: { translation: es }, te: { translation: te }, hi: { translation: hi } },
  lng: initial,
  fallbackLng: 'en',
  supportedLngs: supported,
  interpolation: { escapeValue: false },
});
i18n.on('languageChanged', updateDocument);
updateDocument(i18n.resolvedLanguage || 'en');
export default i18n;
