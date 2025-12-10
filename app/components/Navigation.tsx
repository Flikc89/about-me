'use client';

import { useState } from 'react';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 60;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-1/2 z-40 w-full -translate-x-1/2 px-4 ${styles.header}`}
      >
        <div
          className={`mx-auto flex h-12 items-center justify-between ${styles.navContainer}`}
          style={{ maxWidth: 'var(--max-width)' }}
        >
          {/* Имя слева */}
          <div
            className='text-body font-bold uppercase tracking-[0.16em] text-xs md:text-base'
            style={{ color: 'var(--color-gray)' }}
          >
            Denis Lobanov
          </div>

          {/* Навигация для десктопа */}
          <nav
            className={`text-body items-center gap-4 md:gap-10 font-normal uppercase tracking-[0.16em] text-xs md:text-base ${styles.desktopNav}`}
            style={{ color: 'var(--color-gray)' }}
          >
            <a
              href='#about'
              className='transition-colors hover:text-white'
              onClick={(e) => handleLinkClick(e, '#about')}
            >
              обо мне
            </a>
            <a
              href='#skills'
              className='transition-colors hover:text-white'
              onClick={(e) => handleLinkClick(e, '#skills')}
            >
              навыки
            </a>
            <a
              href='#experience'
              className='transition-colors hover:text-white'
              onClick={(e) => handleLinkClick(e, '#experience')}
            >
              опыт
            </a>
            <a
              href='#contact'
              className='transition-colors hover:text-white'
              onClick={(e) => handleLinkClick(e, '#contact')}
            >
              контакты
            </a>
          </nav>

          {/* Кнопка меню для мобильных */}
          <button
            className={styles.mobileMenuButton}
            onClick={toggleMenu}
            aria-label='Toggle menu'
          >
            <img
              src='/mobile-menu.svg'
              alt='Menu'
              className={styles.mobileMenuIcon}
            />
          </button>
        </div>
      </header>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <>
          <div className={styles.mobileMenuOverlay} onClick={toggleMenu} />
          <nav
            className={`text-body font-normal uppercase tracking-[0.16em] ${styles.mobileMenu}`}
            style={{ color: 'var(--color-gray)' }}
          >
            <a
              href='#about'
              className={styles.mobileMenuItem}
              onClick={(e) => handleLinkClick(e, '#about')}
            >
              обо мне
            </a>
            <a
              href='#skills'
              className={styles.mobileMenuItem}
              onClick={(e) => handleLinkClick(e, '#skills')}
            >
              навыки
            </a>
            <a
              href='#experience'
              className={styles.mobileMenuItem}
              onClick={(e) => handleLinkClick(e, '#experience')}
            >
              опыт
            </a>
            <a
              href='#contact'
              className={styles.mobileMenuItem}
              onClick={(e) => handleLinkClick(e, '#contact')}
            >
              контакты
            </a>
          </nav>
        </>
      )}
    </>
  );
}
