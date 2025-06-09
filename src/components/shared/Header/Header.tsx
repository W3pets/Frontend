import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { useAppSelector } from '@/lib/store/hooks';
import { Paths } from '@/model/types/global';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import Avatar from '../Avatar/Avatar';
import GlobalSearch from '../Inputs/Search/GlobalSearch/GlobalSearch';
import { SellerPaths } from '@/model/types/seller';

type Props = {
  hideSearch?: boolean;
  hideOthers?: boolean;
  hideSeller?: boolean;
};

const Header = ({
  hideOthers = false,
  hideSearch = false,
  hideSeller = false,
}: Props) => {
  const isSeller = useAppSelector((s) => s.user.auth.user?.isSeller || false);
  const cartItemsCount = useAppSelector((s) =>
    s.user.cart.reduce((t, c) => t + c.quantity, 0)
  );

  return (
    <nav className={styles.header}>
      <div className={styles.content}>
        <Link href={Paths.Default} className={styles.logo}>
          <Image src="/logo.svg" alt="w3pets" width={50} height={50} />
          <h3 className={styles.names}>
            <span className={styles.name_1}>W3</span>
            <span className={styles.name_2}>pets</span>
          </h3>
        </Link>

        {!hideSearch && (
          <div className={styles.search}>
            <GlobalSearch />
          </div>
        )}

        {!hideSeller && !isSeller && (
          <Link
            href={`${Paths.Sellers}${SellerPaths.PreviewTerms}`}
            className={styles.seller}
          >
            <span>Become a Seller</span>
          </Link>
        )}

        {!hideOthers && (
          <div className={styles.other}>
            <Avatar />

            <Link href={Paths.Martket} className={styles.market}>
              Market
            </Link>

            <Link href={Paths.Whislist} className={styles.whishlist}>
              <div className={styles.whishlist_content}>
                {!!cartItemsCount && (
                  <div className={styles.counter}>{cartItemsCount}</div>
                )}
                <MdOutlineFavoriteBorder />
              </div>
            </Link>

            <Link href={Paths.Cart} className={styles.cart}>
              <div className={styles.cart_content}>
                {!!cartItemsCount && (
                  <div className={styles.counter}>{cartItemsCount}</div>
                )}
                <MdOutlineShoppingCart />
              </div>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
