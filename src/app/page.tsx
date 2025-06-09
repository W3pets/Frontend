'use client';

import HomeBanner from '@/components/shared/Banner/HomeBanner/HomeBanner';
import styles from './../components/pages/home/styles.module.scss';
import MainCategories from '@/components/pages/home/MainCategories/MainCategories';
import FeaturedProducts from '@/components/pages/home/FeaturedProducts/FeaturedProducts';

const page = () => {
  return (
    <div>
      <HomeBanner />
      <div className={styles.content}>
        <MainCategories />
        <FeaturedProducts />
      </div>
    </div>
  );
};

export default page;
