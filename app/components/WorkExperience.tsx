'use client';

import { useState } from 'react';
import styles from './WorkExperience.module.css';

const EXPERIENCES = [
  {
    id: 1,
    date: '02.2023–11.2025',
    position: 'Senior Frontend Developer',
    company: 'xStack',
    description: [
      'Полностью преобразовал процесс настройки роутинга платежей: вместо неинтуитивных форм предложил и реализовал визуально отображение в виде дерева. Разработал собственный компонент на React с поддержкой drag & drop, поддержкой виртуализации и оптимизацией под большие объёмы данных. Решение значительно повысило наглядность и скорость работы, став основным инструментом для мерчантов.',
      'Ускорил загрузку тяжёлых страниц дашборда, внедрив lazy loading, оптимизацию рендеринга и стратегию кэширования, что заметно снизило TTFB и улучшило UX.',
      'Разрабатывал REST API: создание Entity, генерация и применение миграций (Doctrine), реализация CRUD-эндпоинтов, написание DTO и валидаторов на Symfony.',
      'Наладил процессы incident management: устранил хаос в коммуникациях, разработал документ с чёткими шагами расследования, ввёл единую точку регистрации багов и систему оповещений команд. Решение масштабировано на компанию с 30+ командами (900+ сотрудников).',
    ],
  },
  {
    id: 2,
    date: '10.2021–02.2023',
    position: 'Senior Frontend Developer',
    company: 'ПСБ цифровая лаборатория',
    description: [
      'Работал в команде, которая выводила на рынок новое факторинговое решение. Перед командой стояла цель перевести весь документооборот в цифровой формат, добиться автоматического одобрения заявок, убрать бесконечные звонки в поддержку и создать продукт, способный конкурировать с лидерами рынка (СберБанк, Тинькофф).',
      'С нуля разработал высокопроизводительное SPA на React, Redux, TypeScript, модульную архитектуру и собственную UI-библиотеку компонентов. Реализовал устойчивую работу с большими объёмами данных, продуманную бизнес-логику и быстрый отклик интерфейса.',
      'Проектировал архитектуру фронтенда: управление состоянием, реактивный подход, DTO-слой, оптимизация рендера и ассетов. Использовал SCSS, обеспечил адаптивную и кроссбраузерную вёрстку.',
      'Ключевые модули покрыты тестами (unit + интеграционные).',
      'Для разработки и документирования дизайн-системы применял Storybook. Развивал внутреннюю UI-библиотеку с системой темизации и переиспользуемыми компонентами.',
      'Продукт успешно вышел на рынок и стал одним из ключевых решений компании в сегменте факторинга.',
    ],
  },
  {
    id: 3,
    date: '09.2020–10.2021',
    position: 'Senior Frontend Developer',
    company: 'СНЕГИРЬ СОФТ',
    description: [
      'Работал в компании с большим количеством внутренних продуктов, где приходилось как разрабатывать новые модули с нуля, так и поддерживать и развивать обширное легаси. Участвовал в проектах на разных технологических стэках (React, Vue, Angular), что требовало высокой гибкости и умения быстро погружаться в существующую архитектуру.',
      'Ключевой проект — создание с нуля системы управления ИТ-активами для НК «Роснефть» на React, Redux-Saga, TypeScript, Webpack, Ant Design.',
      'Проектировал структуру приложения, организовывал состояние, реализовывал сложные формы, таблицы, бизнес-логику и интеграцию с API.',
      'Обеспечивал адаптивную и кроссбраузерную верстку, поддерживал единый UI-подход в рамках большого корпоративного продукта.',
      'Также участвовал в рефакторинге и оптимизации существующих решений: улучшал производительность, перерабатывал устаревшие модули, внедрял современные практики фронтенд-разработки.',
    ],
  },
  {
    id: 4,
    date: '08.2018–09.2020',
    position: 'Middle Frontend Developer',
    company: 'CUSTIS',
    description: [
      'Проводил анализ, декомпозицию и оценку задач, сопровождал их от постановки до релиза, в результате удалось выстроить прозрачный и предсказуемый процесс front-end разработки на проекте.',
      'Тесно взаимодействовал с аналитиком, дизайнером и архитектором, благодаря чему удалось наладить эффективный процесс совместной работы и организовать workflow в команде с нуля.',
      'Проектировал архитектуру front-end приложений и смог заменить устаревшие решения, включая отказ от Ext JS в пользу React и удаление самописных неподдерживаемых библиотек с легаси-кодом.',
      'Организовывал workflow и занимался прототипированием, что улучшило качество коммуникации внутри команды и ускорило согласование требований и дизайна.',
      'Разрабатывал группу front-end приложений в рамках единого проекта, обеспечив стабильное развитие и сопровождение нескольких подсистем.',
      'Взаимодействовал с back-end разработчиками и создавал swagger-спецификации для новых сервисов, что упростило интеграции и ускорило разработку.',
      'Обеспечивал качество кода и внедрял тестирование, благодаря чему значительная часть проекта была покрыта тестами, что повысило устойчивость и надежность релизов.',
    ],
  },
  {
    id: 5,
    date: '10.2016–03.2018',
    position: 'Junior Fullstack Developer',
    company: 'ООО «Бизнес Технолоджи»',
    description: [
      'Поддержка пользователей, участие в проектах внедрения. Проектирование БД и написание запросов, разработка интерфейсов пользователей',
    ],
  },
  {
    id: 6,
    date: '06.2016–09.2016',
    position: 'Junior Python Developer',
    company: 'ООО «ИДЕИ ДЛЯ ЗАВТРА»',
    description: [
      'Настройка raspberry pi 3python, настройка raspberry pi 3, работа с датчиками и библиотеками для них, интеграция с azure',
    ],
  },
];

export default function WorkExperience() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id='experience' className={styles.section}>
      <h2 className='section-heading'>work experience</h2>
      <div className={styles.listContainer}>
        {EXPERIENCES.map((exp, index) => (
          <div
            key={exp.id}
            className={`${styles.experienceItem} ${
              index < EXPERIENCES.length - 1 ? styles.itemSpacing : ''
            }`}
            onClick={() => toggleItem(index)}
          >
            <div className={styles.header}>
              <div
                className={`${styles.iconContainer} ${
                  openIndexes.includes(index) ? styles.iconContainerRotated : ''
                }`}
              >
                <img
                  src='/devider.svg'
                  alt='Divider'
                  className={styles.icon}
                />
              </div>
              <div className={styles.titleContainer}>
                <div className={`experience-title ${styles.titleRow}`}>
                  <span>{exp.date}</span>
                  <span className={styles.commitText}>commit:</span>
                  <span>{exp.position}</span>
                  <span>@</span>
                  <span>{exp.company}</span>
                </div>
              </div>
              <div className={`experience-title ${styles.number}`}>
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
            {openIndexes.includes(index) && exp.description && (
              <div className={`experience-description text-white ${styles.descriptionContainer}`}>
                {Array.isArray(exp.description) ? (
                  <ul className={styles.descriptionList}>
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className={styles.descriptionListItem}>
                        <span className={styles.bullet} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className={styles.descriptionText}>{exp.description}</div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
