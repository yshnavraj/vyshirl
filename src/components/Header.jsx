import { useTranslation } from 'react-i18next';
import { site } from '../data/site.js';
import LanguageSwitcher from './LanguageSwitcher.jsx';
export default function Header() {
  const { t } = useTranslation();
  return <header>
    <a className="brand" href="#">vyshirl<span>{t('photography')}</span></a>
    <nav aria-label={t('navigation')}>
      <a href="#work">{t('work')}</a>
      <a href="#perspective">{t('perspective')}</a>
      <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">{t('instagram')} ↗</a>
    </nav>
    <LanguageSwitcher />
  </header>;
}
