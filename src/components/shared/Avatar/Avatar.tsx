import { useAppSelector } from '@/lib/store/hooks';
import { RiUserLine } from 'react-icons/ri';
import styles from './styles.module.scss';

function Avatar() {
  const isAuth = useAppSelector((s) => s.user.auth.isAuth);

  return (
    <div className={styles.wrapper}>
      <div className={isAuth ? styles.auth : styles.not_auth}>
        <RiUserLine />
      </div>
    </div>
  );
}

export default Avatar;
