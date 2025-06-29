'use client';

import styles from '@/components/pages/sellers/terms_conditions/styles.module.scss';
import { usePathname, useRouter } from 'next/navigation';
import { Paths } from '@/model/types/global';
import { useState } from 'react';
import { SellerPaths } from '@/model/types/seller';

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const router = useRouter();

  const isTerms = pathname.includes(SellerPaths.Terms);
  const [left, setLeft] = useState(isTerms ? '0%' : '50%');

  const handlePathChange = () => {
    if (isTerms) {
      router.push(`${Paths.Sellers}${SellerPaths.Privacy}`);
      setLeft('50%');
    } else {
      router.push(`${Paths.Sellers}${SellerPaths.Terms}`);
      setLeft('0%');
    }
  };

  return (
    <>
      <div className={styles.paths}>
        <div className={styles.path} onClick={handlePathChange}>
          Terms of Service
        </div>
        <div className={styles.path} onClick={handlePathChange}>
          Privacy Policy
        </div>
        <div className={styles.indicator2} />
        <div className={styles.indicator} style={{ left }} />
      </div>
      {children}
    </>
  );
}
