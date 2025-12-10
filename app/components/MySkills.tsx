'use client';

import { useEffect, useState } from 'react';
import styles from './MySkills.module.css';

const SKILLS = [
  // Основные технологии - высший приоритет
  'React',
  'ReactJS',
  'TypeScript',
  'JavaScript',
  'Redux',

  // HTML/CSS основы
  'HTML5',
  'HTML',
  'CSS3',
  'SCSS',
  'Sass',
  'Адаптивная верстка',
  'Кроссбраузерная верстка',

  // Инструменты разработки
  'Webpack',
  'Git',
  'Storybook',
  'REST',
  'SPA',

  // Архитектура и практики
  'Создание архитектуры проектов',
  'ООП',
  'Оптимизация кода',
  'Веб-программирование',

  // UI библиотеки и фреймворки
  'Ant Design',
  'Vue.js',
  'Angular',
  'ag-Grid',

  // DevOps и CI/CD
  'CI/CD',
  'Docker',
  'Jenkins',

  // Базы данных
  'PostgreSQL',
  'MySQL',
  'SQL',
  'Базы данных',

  // Дополнительные технологии
  'Виртуализация',
  'LESS',
  'Bootstrap',
  'Python',
  'PXP',
  'Gulp',
  'Vagrant',
  'Ext JS',

  // Менеджмент
  'Руководство коллективом',
];

const ROW_CONFIG = [10, 7, 4, 7, 6, 6, 1];

export default function MySkills() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const skillsRows: string[][] = [];
  
  if (isMobile) {
    // На мобильных просто одна строка со всеми навыками
    skillsRows.push(SKILLS);
  } else {
    // На десктопе используем ROW_CONFIG
    let currentIndex = 0;
    ROW_CONFIG.forEach((count) => {
      skillsRows.push(SKILLS.slice(currentIndex, currentIndex + count));
      currentIndex += count;
    });
  }

  return (
    <section id='skills' className={styles.section}>
      <h2 className={`section-heading ${styles.heading}`}>my skills</h2>
      <div className={styles.skillsContainer}>
        {skillsRows.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.skillsRow}>
            {row.map((skill, index) => (
              <div key={index} className={styles.skillBlock}>
                <div className={styles.skillBlockInner}>
                  <span className={styles.skillText}>[{skill}]</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
