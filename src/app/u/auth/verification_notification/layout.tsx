'use client';

import styles from '@/components/pages/auth/styles.module.scss';
import { useAppSelector } from '@/lib/store/hooks';
import { Paths } from '@/model/types/global';
import { AuthPaths } from '@/model/types/user/auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { IoMailUnreadOutline } from 'react-icons/io5';
import { IoMdArrowBack } from 'react-icons/io';

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const justRegistered = useAppSelector((s) => s.user.auth.justRegistered);

  if (!justRegistered) {
    redirect(`${Paths.Auth}/${AuthPaths.Register}`);
  }

  return (
    <>
      <div className={styles.header}>
        <IoMailUnreadOutline fontSize={64} className={styles.icon} />
        <div className={styles.title}>Check Your Email</div>
        <div className={styles.slogan}>
          We've sent a verification email to
          <br /> {justRegistered}
        </div>
      </div>
      {children}
      <Link
        className={styles.return_path}
        href={`${Paths.Auth}/${AuthPaths.Register}`}
      >
        <IoMdArrowBack />
        Go back to signup
      </Link>
    </>
  );
}
