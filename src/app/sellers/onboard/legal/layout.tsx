'use client';

import styles from '@/components/pages/sellers/preview_terms_conditions/styles.module.scss';
import Card from '@/components/shared/Cards/Card';
import { SellerPaths } from '@/model/types/seller';
import { usePathname } from 'next/navigation';

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const isPreview = pathname.includes(SellerPaths.PreviewTerms);

  return (
    <div className={styles.preview_terms}>
      <div className={styles.content}>
        <Card maxWidth={isPreview ? 500 : 1200}>{children}</Card>
      </div>
    </div>
  );
}
