import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';
import { photoSrc } from '../data/photos.js';

export default function Lightbox({ photos, index, onClose, onStep }) {
  const { t } = useTranslation();
  const dialogRef = useRef(null);
  const photo = photos[index];

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <dialog id="viewer" ref={dialogRef} aria-label={t('viewer')}
      onCancel={event => { event.preventDefault(); onClose(); }}
      onKeyDown={event => {
        if (event.key === 'ArrowRight') { event.preventDefault(); onStep(1); }
        if (event.key === 'ArrowLeft') { event.preventDefault(); onStep(-1); }
      }}>
      <button className="close" aria-label={t('close')} onClick={onClose}>✕</button>
      <button className="prev" aria-label={t('previous')} onClick={() => onStep(-1)}>←</button>
      <figure>
        <img src={photoSrc(photo)} alt={t(`photos.${photo.id}.alt`, { defaultValue: photo.alt })} />
        <figcaption>
          <span>{t(`photos.${photo.id}.title`, { defaultValue: photo.title })} — {index + 1} / {photos.length}</span>
          <a href={`https://www.instagram.com/p/${photo.postId}/`} target="_blank" rel="noopener noreferrer">
            {t('original')} ↗
          </a>
        </figcaption>
      </figure>
      <button className="next" aria-label={t('next')} onClick={() => onStep(1)}>→</button>
    </dialog>
  );
}
