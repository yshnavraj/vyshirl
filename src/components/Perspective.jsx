import { useTranslation } from 'react-i18next';
import { site } from '../data/site.js';
export default function Perspective() {
  const { t } = useTranslation();
  return <section className="perspective" id="perspective">
    <p className="eyebrow">{t('aboutLabel')}</p>
    <h2>{t('about1')}<br />{t('about2')}</h2>
    <div><p>{t('description1')}</p><p>{t('description2')}</p>
      <a className="cta" href={site.instagramUrl} target="_blank" rel="noopener noreferrer">{t('more')} ↗</a>
    </div>
  </section>;
}
