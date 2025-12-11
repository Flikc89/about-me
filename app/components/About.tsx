import styles from './About.module.css';

const STATS = [
  { title: '10+', description: 'Лет опыта' },
  { title: '50+', description: 'Проектов' },
  { title: '6+', description: 'Компаний' },
  { title: '100%', description: 'Вовлеченности' },
];

export default function About() {
  return (
    <section id='about' className={styles.section}>
      <h2 className={`section-heading ${styles.heading}`}>About me</h2>
      <div className={`text-body text-white ${styles.description}`}>
        Я создаю интерфейсы, которые работают быстрее, выглядят лучше и решают
        настоящие задачи людей. Для меня важно, чтобы пользователь чувствовал
        себя уверенно и спокойно.
      </div>
      <div className={`flex ${styles.statsContainer}`}>
        {STATS.map((stat, index) => {
          const isLeftToRight = index % 2 === 0;
          const gradientClass = isLeftToRight
            ? styles.statCardGradientLeft
            : styles.statCardGradientRight;

          return (
            <div key={index} className={`${styles.statCard} ${gradientClass}`}>
              <div className={styles.statCardInner}>
                <div className={styles.statTitle}>{stat.title}</div>
                <div className={`text-white ${styles.statDescription}`}>
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
