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
    const header1Paths = [Paths.Auth];
    const hideHeaderPaths = [Paths.Sellers];

    const header1 = <Header hideSearch hideOthers hideSeller />;
    if (header1Paths.some((p) => pathname.startsWith(p))) {
      return header1;
    }

    if (hideHeaderPaths.some((p) => pathname.startsWith(p))) {
      return null;
    }

    return <Header />;
  }, [pathname]);

  const footer = useMemo(() => {
    const hideFooterPaths = [Paths.Sellers];

    if (pathname === Paths.Default) {
      return <Footer />;
    }

    if (hideFooterPaths.some((p) => pathname.startsWith(p))) {
      return null;
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
