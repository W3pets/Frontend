'use client';

import { AuthPaths } from '@/model/types/user/auth';
import styles from '@/components/pages/auth/styles.module.scss';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { ImgPaths, Paths } from '@/model/types/global';
import { useState } from 'react';

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const redirect = searchParams.get('redirect');

  const isLogin = pathname.includes(AuthPaths.Login);
  const [left, setLeft] = useState(isLogin ? '0%' : '50%');

  const handlePathChange = () => {
    let link = `${Paths.Auth}`;
    if (isLogin) {
      link += AuthPaths.Register;
      setLeft('50%');
    } else {
      link += AuthPaths.Login;
      setLeft('0%');
    }
    if (redirect) {
      link += `?redirect=${encodeURIComponent(redirect)}`;
    }
    router.push(link);
  };

  return (
    <>
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
      {children}
    </>
  );
}
