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
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import newSellerSlice from '@/lib/store/slices/seller/newSeller';
import { useRouter } from 'next/navigation';
import CheckedList from '@/components/shared/CheckedList/CheckedList';

const termsSeed = [
  'Verify your identity and contact information',
  'Provide accurate details about your pets and livestock',
  'Understand our secure payment process via escrow',
  'Agree to our community guidelines and animal welfare standards',
];

function page() {
  const [isAccepting, setIsAccepting] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  const user = useAppSelector((state) => state.user.auth.user);

  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleAccept = () => {
    setIsAccepting(true);
    dispatch(newSellerSlice.actions.setTerms(true));
    setIsAccepting(false);

    setTimeout(() => {
      router.push(`${Paths.Sellers}${SellerPaths.SellerRegister}`);
    }, 500);
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
        <div className={styles.title}>Hi {user?.email} !</div>
        <div className={styles.slogan}>
          Ready to begin ? Do you accept W3pets's terms to continue?
        </div>
      </div>
      <div className={styles.terms}>
        <div className={styles.header}>Before you start selling on W3pets:</div>
        <CheckedList items={termsSeed} />
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
