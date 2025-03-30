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
    if (pathname.startsWith(Paths.Auth)) {
      return <Header hideSearch hideOthers />;
    }

    return <Header />;
  }, [pathname]);

  const footer = useMemo(() => {
    if (pathname.startsWith(Paths.Auth)) {
      return null;
    }

    return <Footer />;
  }, [pathname]);

  return (
    <div className={styles.app_wrapper}>
      {header}
      <main className={styles.main}>{children}</main>
      {footer}
    </div>
  );
}
