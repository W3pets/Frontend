'use client';

import { usePathname } from 'next/navigation';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';
import styles from './styles.module.scss';
import { useMemo } from 'react';
import { Paths } from '@/model/types/global';

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();

  const header = useMemo(() => {
    const header1 = <Header hideSearch hideOthers hideSeller />;

    const header1Paths = [Paths.Auth, Paths.Sellers];
    if (header1Paths.some((p) => pathname.startsWith(p))) {
      return header1;
    }

    return <Header />;
  }, [pathname]);

  const footer = useMemo(() => {
    if (pathname === Paths.Default) {
      return <Footer />;
    }

    return <Footer isMinInfo />;
  }, [pathname]);

  return (
    <div className={styles.app_wrapper}>
      {header}
      <main className={styles.main}>{children}</main>
      {footer}
    </div>
  );
}
