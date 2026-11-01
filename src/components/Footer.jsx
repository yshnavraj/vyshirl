import { useTranslation } from 'react-i18next';
import { site } from '../data/site.js';
export default function Footer() {
  const { t } = useTranslation();
  return <footer><a className="brand" href="#">vyshirl</a><p>{t('credit')}</p>
    <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">{t('connect')} ↗</a>
  </footer>;
}
