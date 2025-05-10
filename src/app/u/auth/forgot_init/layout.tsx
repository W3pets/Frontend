import styles from '@/components/pages/auth/styles.module.scss';
import { ImgPaths } from '@/model/types/global';
import Image from 'next/image';

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className={styles.header}>
        <Image src={ImgPaths.Logo} width={48} height={48} alt="logo" />
        <div className={styles.title}>Forgot Password?</div>
        <div className={styles.slogan}>
          No worries! Enter your email and we'll send you reset instructions.
        </div>
      </div>
      {children}
    </>
  );
}
