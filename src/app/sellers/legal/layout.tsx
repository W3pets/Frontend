'use client';

import styles from '@/components/pages/sellers/preview_terms_conditions/styles.module.scss';
import { SellerPaths } from '@/model/types/seller';
import { usePathname } from 'next/navigation';

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();

  const isPreview = pathname.includes(SellerPaths.PrivacyPreview);

  return (
    <div className={styles.preview_terms}>
      <div className={styles.content}>
        <div
          className={styles.card}
          style={isPreview ? { maxWidth: '500px' } : {}}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
