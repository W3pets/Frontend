'use client';

import Sidebar from '../components/Sidebar';
import CloseSellers from '../components/CloseSellers';
import DogList from '../components/DogList';
import BirdList from '../components/BirdList';
import MainCategories from '../components/MainCategories';
import HomeBanner from '@/components/shared/Banner/HomeBanner/HomeBanner';
import styles from './../components/pages/home/styles.module.scss';

const page = () => {
  return (
    <div>
      <HomeBanner />

      <div className={styles.content}>
        <MainCategories />
        <CloseSellers />
      </div>
    </div>
  );
};

export default page;
