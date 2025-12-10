'use client';

import { useState, useRef } from 'react';
import styles from './Contact.module.css';

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
  const [mousePosition, setMousePosition] = useState<{
    [key: string]: { x: number; y: number };
  }>({});
  const linkRefs = useRef<{
    [key: string]: HTMLAnchorElement | HTMLDivElement | null;
  }>({});

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

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>,
    key: string
  ) => {
    const element = linkRefs.current[key];
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition((prev) => ({
      ...prev,
      [key]: { x, y },
    }));
  };

  const handleMouseLeave = (key: string) => {
    setMousePosition((prev) => {
      const newPos = { ...prev };
      delete newPos[key];
      return newPos;
    });
  };

  const getGradientStyle = (key: string, isSocial: boolean = false) => {
    const pos = mousePosition[key];
    if (!pos) {
      return {
        WebkitBackgroundClip: 'initial',
        WebkitTextFillColor: 'initial',
        backgroundClip: 'initial',
      };
    }

    const element = linkRefs.current[key];
    if (!element) {
      return {
        WebkitBackgroundClip: 'initial',
        WebkitTextFillColor: 'initial',
        backgroundClip: 'initial',
      };
    }

    const rect = element.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Вычисляем расстояние от центра до курсора
    const distance = Math.sqrt(
      Math.pow(pos.x - centerX, 2) + Math.pow(pos.y - centerY, 2)
    );
    const maxDistance = Math.sqrt(
      Math.pow(rect.width / 2, 2) + Math.pow(rect.height / 2, 2)
    );

    // Нормализуем позицию курсора в процентах от размера элемента
    // Центр элемента = 50% 50%
    const normalizedX = (pos.x / rect.width) * 100;
    const normalizedY = (pos.y / rect.height) * 100;

    // Создаем радиальный градиент от позиции курсора
    // Чем ближе к центру, тем больше пурпурного в центре
    const gradientSize = Math.min(150, 100 + (distance / maxDistance) * 50);

    // Для соц сетей используем другой градиент с меньшей пурпурной областью
    const gradientString = isSocial
      ? `radial-gradient(circle ${gradientSize}px at ${normalizedX}% ${normalizedY}%, var(--color-purple) 0%, white 50%, white 100%)`
      : `radial-gradient(circle ${gradientSize}px at ${normalizedX}% ${normalizedY}%, var(--color-purple) 0%, var(--color-purple) 50%, white 100%)`;

    return {
      backgroundImage: gradientString,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      color: 'transparent',
    };
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
            style={getGradientStyle('phone')}
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
            style={getGradientStyle('email')}
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
              style={getGradientStyle('telegram', true)}
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
              style={getGradientStyle('github', true)}
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
              style={getGradientStyle('habr', true)}
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
              style={getGradientStyle('location', true)}
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
