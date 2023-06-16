import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Header.module.scss';

export function Header() {
  const { asPath } = useRouter();
  const [transparentHeader, setTransparentHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldTransparent = window.scrollY > 0;
      setTransparentHeader(shouldTransparent);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.container} ${transparentHeader ? styles.transparent : ''}`}>
      <div className={styles.content}>
        <nav>
          <Link href="/">Nutri <strong>Table</strong> </Link>
          <div>
          <input type="search" />
            <button  name="search" type="submit">
              <img src="/search.png" alt="Search" /> 
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
