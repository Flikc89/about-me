'use client';

import styles from './Contact.module.css';
import { getGradientStyle, useGradientHover } from '@/lib/gradient';

const PHONE = '+7 995 500-64-71';
const EMAIL = 'flikc8668@gmail.com';
const LOCATION = 'Россия, Москва, м. Сколково';
const LOCATION_FOR_MAP =
  'деревня Сколково, Одинцовский городской округ, Московская область';

const SOCIAL_LINKS = {
  telegram: 'https://t.me/Flikc',
  github: 'https://github.com/Flikc89',
  habr: 'https://career.habr.com/flikc',
};

export default function Contact() {
  const {
    mousePosition,
    elementRefs: linkRefs,
    handleMouseMove,
    handleMouseLeave,
  } = useGradientHover();

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // Можно добавить уведомление об успешном копировании
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleLocationClick = () => {
    const query = encodeURIComponent(LOCATION_FOR_MAP);
    window.open(`https://yandex.ru/maps/?text=${query}`, '_blank');
  };

  return (
    <section id='contact' className={styles.section}>
      <h2 className={`section-heading ${styles.heading}`}>contact</h2>
      <div className={styles.contactsContainer}>
        <div className={styles.contactsContent}>
          <div
            ref={(el) => {
              linkRefs.current['phone'] = el;
            }}
            className={`contact-text ${styles.contactItem}`}
            onClick={() => handleCopy(PHONE)}
            onMouseMove={(e) => handleMouseMove(e, 'phone')}
            onMouseLeave={() => handleMouseLeave('phone')}
            style={getGradientStyle('phone', mousePosition, linkRefs, true)}
            title='Нажмите, чтобы скопировать'
          >
            {PHONE}
          </div>
          <div
            ref={(el) => {
              linkRefs.current['email'] = el;
            }}
            className={`contact-text ${styles.contactItem}`}
            onClick={() => handleCopy(EMAIL)}
            onMouseMove={(e) => handleMouseMove(e, 'email')}
            onMouseLeave={() => handleMouseLeave('email')}
            style={getGradientStyle('email', mousePosition, linkRefs, true)}
            title='Нажмите, чтобы скопировать'
          >
            {EMAIL}
          </div>

          <div className={styles.socialContainer}>
            <a
              ref={(el) => {
                linkRefs.current['telegram'] = el;
              }}
              href={SOCIAL_LINKS.telegram}
              target='_blank'
              rel='noopener noreferrer'
              className={`text-body ${styles.socialLink}`}
              onMouseMove={(e) => handleMouseMove(e, 'telegram')}
              onMouseLeave={() => handleMouseLeave('telegram')}
              style={getGradientStyle('telegram', mousePosition, linkRefs)}
            >
              Telegram
              <img
                src='/social-link.svg'
                alt=''
                className={styles.socialLinkIcon}
              />
            </a>
            <a
              ref={(el) => {
                linkRefs.current['github'] = el;
              }}
              href={SOCIAL_LINKS.github}
              target='_blank'
              rel='noopener noreferrer'
              className={`text-body ${styles.socialLink}`}
              onMouseMove={(e) => handleMouseMove(e, 'github')}
              onMouseLeave={() => handleMouseLeave('github')}
              style={getGradientStyle('github', mousePosition, linkRefs)}
            >
              GitHub
              <img
                src='/social-link.svg'
                alt=''
                className={styles.socialLinkIcon}
              />
            </a>
            <a
              ref={(el) => {
                linkRefs.current['habr'] = el;
              }}
              href={SOCIAL_LINKS.habr}
              target='_blank'
              rel='noopener noreferrer'
              className={`text-body ${styles.socialLink}`}
              onMouseMove={(e) => handleMouseMove(e, 'habr')}
              onMouseLeave={() => handleMouseLeave('habr')}
              style={getGradientStyle('habr', mousePosition, linkRefs)}
            >
              Хабр Карьера
              <img
                src='/social-link.svg'
                alt=''
                className={styles.socialLinkIcon}
              />
            </a>
          </div>

          <div className={`text-body ${styles.locationContainer}`}>
            Местоположение:
            <div
              ref={(el) => {
                linkRefs.current['location'] = el;
              }}
              className={styles.locationLink}
              onClick={handleLocationClick}
              onMouseMove={(e) => handleMouseMove(e, 'location')}
              onMouseLeave={() => handleMouseLeave('location')}
              style={getGradientStyle('location', mousePosition, linkRefs)}
              title='Открыть в Яндекс Картах'
            >
              <div>{LOCATION}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
