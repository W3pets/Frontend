'use client';

import { AuthPaths } from '@/model/types/user/auth';
import styles from '@/components/pages/auth/styles.module.scss';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { ImgPaths, Paths } from '@/model/types/global';
import { useState } from 'react';

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const router = useRouter();

  const isLogin = pathname.includes(AuthPaths.Login);
  const [left, setLeft] = useState(isLogin ? '0%' : '50%');

  const handlePathChange = () => {
    if (isLogin) {
      router.push(`${Paths.Auth}${AuthPaths.Register}`);
      setLeft('50%');
    } else {
      router.push(`${Paths.Auth}${AuthPaths.Login}`);
      setLeft('0%');
    }
  };

  return (
    <div className={styles.content}>
      <div className={styles.card}>
        <div className={styles.header}>
          <Image src={ImgPaths.Logo} width={48} height={48} alt="logo" />
          <div className={styles.title}>Welcome to W3pets</div>
          <div className={styles.slogan}>
            The marketplace for pet and livestock sellers
          </div>
        </div>
        <div className={styles.paths}>
          <div className={styles.path} onClick={handlePathChange}>
            Log In
          </div>
          <div className={styles.path} onClick={handlePathChange}>
            Sign Up
          </div>
          <div className={styles.indicator2} />
          <div className={styles.indicator} style={{ left }} />
        </div>
        <>{children}</>
      </div>
    </div>
  );
}
