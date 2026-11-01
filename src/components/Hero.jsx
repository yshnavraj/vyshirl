import { useTranslation } from 'react-i18next';
export default function Hero() {
  const { t } = useTranslation();
  return <section className="intro">
    <p className="eyebrow">{t('journal')}</p>
    <h1>{t('headline1')}<br /><em>{t('headline2')}</em></h1>
    <div className="intro-bottom">
      <p>{t('intro1')}<br />{t('intro2')}</p>
      <a href="#work">{t('explore')} <span>↓</span></a>
    </div>
  </section>;
}
