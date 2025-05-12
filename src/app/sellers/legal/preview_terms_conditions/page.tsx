'use client';

import { useMemo, useState } from 'react';
import styles from '@/components/pages/sellers/preview_terms_conditions/styles.module.scss';
import { MdOutlineShield } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa6';
import Button from '@/components/shared/Button/Button';
import { SellerPaths } from '@/model/types/seller';
import { Paths } from '@/model/types/global';
import Link from 'next/link';
import uniqId from 'uniqid';
import MultiChecked, {
  MultiCheckItem,
} from '@/components/shared/Inputs/MultiChecked/MultiChecked';

const termsSeed = [
  'Verify your identity and contact information',
  'Provide accurate details about your pets and livestock',
  'Understand our secure payment process via escrow',
  'Agree to our community guidelines and animal welfare standards',
];

function page() {
  const [isAccepting, setIsAccepting] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  const handleAccept = () => {
    setIsAccepting(true);
    setIsAccepting(false);
  };

  const onAcceptChange = (items: MultiCheckItem[]) => {
    const isSelected = items[0]?.selected || false;
    setIsAccepted(isSelected);
  };

  const confirmTsx = useMemo(
    () => (
      <div className={styles.confirm_txt}>
        I have read and accepted the full{' '}
        <Link href={`${Paths.Sellers}${SellerPaths.Terms}`}>
          terms of service
        </Link>{' '}
        and{' '}
        <Link href={`${Paths.Sellers}${SellerPaths.Privacy}`}>
          privacy policy
        </Link>
      </div>
    ),
    []
  );

  return (
    <>
      <div className={styles.header}>
        <MdOutlineShield />
        <div className={styles.title}>Hi Abraham Kuforiji !</div>
        <div className={styles.slogan}>
          Ready to begin ? Do you accept W3pets's terms to continue?
        </div>
      </div>
      <div className={styles.terms}>
        <div className={styles.header}>Before you start selling on W3pets:</div>
        {termsSeed.map((term) => (
          <div key={uniqId()} className={styles.term}>
            <FaCheck />
            <span>{term}</span>
          </div>
        ))}
      </div>
      <MultiChecked
        items={[{ name: confirmTsx, id: 0, selected: isAccepted }]}
        onChange={onAcceptChange}
      />
      <Button
        isLoading={isAccepting}
        isDisabled={!isAccepted}
        onClick={handleAccept}
      >
        Confirm
      </Button>
    </>
  );
}

export default page;
