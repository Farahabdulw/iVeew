"use client";
import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [activePath, setActivePath] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setActivePath(window.location.pathname);
    }
  }, []);

  return (
    <nav className={styles.nav}>
      <div className="max-w-screen-xl flex justify-between items-center">
        <Link href="/">
          <Image
            className={styles.imgStyle}
            src="/images/logo_light.png"
            width={50}
            height={50}
            alt="logo light"
          />
        </Link>
        <div className={styles.linkContainer}>
          <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
            <li className={`${styles.fontlink} ${activePath === '/applications' ? styles.activeLink : ''}`}>
              <Link href="/applications">Applications</Link>
            </li>
            <li className={`${styles.fontlink} ${activePath === '/charts' ? styles.activeLink : ''}`}>
              <Link href="/charts">Charts</Link>
            </li>
            <li className={`${styles.fontlink} ${activePath === '/guests' ? styles.activeLink : ''}`}>
              <Link href="/guests">Guests</Link>
            </li>
            {/* <li className={`${styles.fontlink} ${activePath === '/login' ? styles.activeLink : ''}`}>
              <Link href="/login">Login</Link>
            </li> */}
            {/* <li className={`${styles.fontlink} ${activePath === '/register' ? styles.activeLink : ''}`}>
              <Link href="/register">Register</Link>
            </li> */}
          </ul>
        </div>
        <div className={styles.sideTwoNav}>
          {/* <button className={styles.logffbtn}><span>Log Off</span></button> */}
          <button className={styles.logffbtn}>
            <Link href="/login">login</Link> 
          </button>
        </div>
      </div>
    </nav>
  );
}
