'use client';

import styles from '@/components/pages/auth/styles.module.scss';

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={styles.content}>
      <div className={styles.card}>{children}</div>
    </div>
  );
}
