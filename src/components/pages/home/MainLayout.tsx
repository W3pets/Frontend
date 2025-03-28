'use client'; // This file is a client component

import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer/Footer';
import styles from './styles.module.scss';

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={styles.app_wrapper}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
