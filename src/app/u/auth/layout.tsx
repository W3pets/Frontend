'use client';

import ProtectedRoute from '@/app/ProtectedRoute';
import styles from '@/components/pages/auth/styles.module.scss';
import { Suspense } from 'react';

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <Suspense>
      <ProtectedRoute isAuthCheck>
        <div className={styles.content}>
          <div className={styles.card}>{children}</div>
        </div>
      </ProtectedRoute>
    </Suspense>
  );
}
