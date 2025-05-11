'use client';

import ProtectedRoute from '@/app/ProtectedRoute';
import styles from '@/components/pages/auth/styles.module.scss';
import { useSearchParams } from 'next/navigation';

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect') || '/';

  return (
    <ProtectedRoute redirect_path={redirect} isAuthCheck={false}>
      <div className={styles.content}>
        <div className={styles.card}>{children}</div>
      </div>
    </ProtectedRoute>
  );
}
