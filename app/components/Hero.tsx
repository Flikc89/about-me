import ChatAssistant from './ChatAssistant';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className='w-full flex justify-center relative'>
      {/* Background SVG */}
      <div className={`absolute pointer-events-none ${styles.background}`} />

      {/* Content container with flexbox */}
      <div className={`relative flex ${styles.contentContainer}`}>
        {/* Logo text block with top margin */}
        <div className={`relative ${styles.frontendBlock}`}>
          <h1 className={`heading ${styles.headingPurple}`}>frontend</h1>
        </div>

        {/* Developer text block with top margin */}
        <div className={`relative ${styles.developerBlock}`}>
          <h1 className={`heading ${styles.headingPurple}`}>developer</h1>
        </div>

        {/* Photo in center */}
        <div className={`absolute ${styles.photoContainer}`}>
          <img
            src='/hero.svg'
            alt='Hero photo'
            className='w-full h-full object-cover'
          />
        </div>

        {/* Chat Assistant */}
        <div className={`absolute ${styles.chatAssistantContainer}`}>
          <ChatAssistant />
        </div>
      </div>
    </section>
  );
}
