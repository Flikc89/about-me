'use client';

import styles from './About.module.css';
import { getGradientStyle, useGradientHover } from '@/lib/gradient';

const STATS = [
  { title: '10+', description: 'Лет опыта' },
  { title: '50+', description: 'Проектов' },
  { title: '6+', description: 'Компаний' },
  { title: '100%', description: 'Вовлеченности' },
];

export default function About() {
  const { mousePosition, elementRefs, handleMouseMove, handleMouseLeave } =
    useGradientHover();

  return (
    <section id='about' className={styles.section}>
      <h2 className={`section-heading ${styles.heading}`}>About me</h2>
      <div
        ref={(el) => {
          elementRefs.current['description'] = el;
        }}
        className={`text-body text-white ${styles.description}`}
        onMouseMove={(e) => handleMouseMove(e, 'description')}
        onMouseLeave={() => handleMouseLeave('description')}
        style={getGradientStyle(
          'description',
          mousePosition,
          elementRefs,
          true
        )}
      >
        Senior/Lead фронтендер с большим опытом в React, JavaScript и создании
        сложных интерфейсов. Умею проектировать архитектуру, ускорять продукты и
        превращать запутанные процессы в удобные инструменты.
      </div>
      <div className={`flex ${styles.statsContainer}`}>
        {STATS.map((stat, index) => {
          const isLeftToRight = index % 2 === 0;
          const gradientClass = isLeftToRight
            ? styles.statCardGradientLeft
            : styles.statCardGradientRight;

          const statDescriptionKey = `stat-description-${index}`;
          return (
            <div key={index} className={`${styles.statCard} ${gradientClass}`}>
              <div className={styles.statCardInner}>
                <div className={`card-heading ${styles.statTitle}`}>
                  {stat.title}
                </div>
                <div
                  ref={(el) => {
                    elementRefs.current[statDescriptionKey] = el;
                  }}
                  className={`text-white ${styles.statDescription}`}
                  onMouseMove={(e) => handleMouseMove(e, statDescriptionKey)}
                  onMouseLeave={() => handleMouseLeave(statDescriptionKey)}
                  style={getGradientStyle(
                    statDescriptionKey,
                    mousePosition,
                    elementRefs
                  )}
                >
                  {stat.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
