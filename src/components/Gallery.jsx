import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import { photos, photoSrc } from '../data/photos.js';
import Lightbox from './Lightbox.jsx';

export default function Gallery() {
  const { t } = useTranslation();
  const [category, setCategory] = useState('All');
  const [selectedIndex, setSelectedIndex] = useState(null);
  const lastTrigger = useRef(null);
  const categories = ['All', ...new Set(photos.map(photo => photo.category))];
  const visiblePhotos = category === 'All' ? photos : photos.filter(photo => photo.category === category);

  useEffect(() => {
    if (selectedIndex === null) lastTrigger.current?.focus();
  }, [selectedIndex]);

  function closeViewer() {
    setSelectedIndex(null);

  }

  return (
    <section id="work">
      <div className="section-head">
        <h2>{t('selected')} <sup>{photos.length}</sup></h2>
        <p>{t('tagline')}</p>
      </div>
      <div className="filters" aria-label={t('filter')}>
        {categories.map(item => (
          <button key={item} className={category === item ? 'active' : ''}
            aria-pressed={category === item} onClick={() => setCategory(item)}>
            {t(`categories.${item}`, { defaultValue: item })}
          </button>
        ))}
      </div>
      <div className="gallery" id="gallery">
        {visiblePhotos.map((photo, index) => (
          <figure className="photo" key={photo.id}>
            <button aria-label={t('open', { title: t(`photos.${photo.id}.title`, { defaultValue: photo.title }) })} onClick={event => {
              lastTrigger.current = event.currentTarget;
              setSelectedIndex(index);
            }}>
              <img src={photoSrc(photo)} alt={t(`photos.${photo.id}.alt`, { defaultValue: photo.alt })} loading="lazy" />
            </button>
            <figcaption>
              <strong>{t(`photos.${photo.id}.title`, { defaultValue: photo.title })}</strong>
              <span>{t(`categories.${photo.category}`, { defaultValue: photo.category })} / {String(photos.indexOf(photo) + 1).padStart(2, '0')}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      {selectedIndex !== null && (
        <Lightbox photos={visiblePhotos} index={selectedIndex} onClose={closeViewer}
          onStep={direction => setSelectedIndex(index => (
            index + direction + visiblePhotos.length
          ) % visiblePhotos.length)} />
      )}
    </section>
  );
}

