'use client';

import React, { useLayoutEffect, useState } from 'react';
import styles from '@/components/pages/sellers/register/styles.module.scss';
import { Steps } from 'antd';
import Verification from '@/components/pages/sellers/register/Verification';
import Profile from '@/components/pages/sellers/register/Profile';
import FirstListing from '@/components/pages/sellers/register/FirstListing';
import { redirect, useRouter, useSearchParams } from 'next/navigation';
import { OnBoardingSteps, SellerPaths } from '@/model/types/seller';
import { useAppSelector } from '@/lib/store/hooks';
import { Paths } from '@/model/types/global';

const sellerProgress = [
  { title: 'Profile' },
  { title: 'Verification' },
  { title: 'First Listing' },
];

function page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get('progress');
  const [progress, setProgress] = useState(0);

  const isProfileValid = useAppSelector(
    (s) => s.seller.newSeller.profile.isValid
  );

  const acceptedTerms = useAppSelector((s) => s.seller.newSeller.acceptedTerms);

  const handleStepChange = (newStep: number) => {
    if (isProfileValid && newStep == 2) {
      router.push(
        `${Paths.Sellers}${SellerPaths.SellerRegister}?progress=${OnBoardingSteps.Listing}`
      );
    }

    if (newStep == 0) {
      router.push(
        `${Paths.Sellers}${SellerPaths.SellerRegister}?progress=${OnBoardingSteps.Profile}`
      );
    }

    if (newStep == 1) {
      router.push(
        `${Paths.Sellers}${SellerPaths.SellerRegister}?progress=${OnBoardingSteps.ID}`
      );
    }
  };

  useLayoutEffect(() => {
    if (!acceptedTerms) {
      redirect(`${Paths.Sellers}${SellerPaths.PreviewTerms}`);
    }

    if (search === OnBoardingSteps.Profile) {
      setProgress(0);
    }
    if (search === OnBoardingSteps.ID) {
      setProgress(1);
    }
    if (search == OnBoardingSteps.Listing && isProfileValid) {
      setProgress(2);
    }
  }, [search]);

  return (
    <div className={styles.register_seller_wrapper}>
      <div className={styles.progress}>
        <Steps
          current={progress}
          percent={progress ? (progress == 1 ? 50 : 100) : 0}
          onChange={handleStepChange}
          labelPlacement="vertical"
          responsive={false}
          items={sellerProgress}
          size="small"
        />
      </div>
      {!progress && <Profile />}
      {progress == 1 && <Verification />}
      {progress == 2 && <FirstListing />}
    </div>
  );
}

export default page;
