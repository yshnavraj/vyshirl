import { useTranslation } from 'react-i18next';
import { languages } from '../i18n.js';

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  return <label className="language-switcher">
    <span>{t('language')}</span>
    <select value={i18n.resolvedLanguage} onChange={event => i18n.changeLanguage(event.target.value)}>
      {languages.map(language => <option key={language.code} value={language.code} lang={language.code}>{language.label}</option>)}
    </select>
  </label>;
}
