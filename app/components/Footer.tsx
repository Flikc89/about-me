import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`footer-text ${styles.footerContent}`}>
        © 2025 DenisLobanov. Все права защищены.
      </div>
    </footer>
  );
}

