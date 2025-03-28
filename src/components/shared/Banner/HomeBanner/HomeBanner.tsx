import Image from 'next/image';
import styles from './styles.module.scss';
import { ImgPaths } from '@/model/types/global';
import { useEffect, useLayoutEffect, useRef } from 'react';
import GlobalSearch from '../../Search/GlobalSearch/GlobalSearch';

function HomeBanner() {
  const bannerWidth = useRef(0);

  useLayoutEffect(() => {
    bannerWidth.current = window.innerWidth;
  }, []);

  return (
    <div className={styles.banner}>
      <div className={styles.img}>
        <Image
          src={ImgPaths.Banner}
          alt="app logo"
          width={768}
          height={400}
          className={styles.img}
        />
        <div className={styles.cover} />

        <div className={styles.info}>
          <div className={styles.content}>
            <h2 className={styles.header}>Find Your Perfect Pet Companion</h2>
            <div className={styles.slogan}>
              Browse thousands of pets or list your own. Your new best friend is
              just a click away!
            </div>
            <div className={styles.search}>
              <GlobalSearch useV2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
