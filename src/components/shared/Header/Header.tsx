import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { useAppSelector } from '@/lib/store/hooks';
import Avatar from '../Avatar/Avatar';
import { Paths } from '@/model/types/global';
import GlobalSearch from '../Search/GlobalSearch/GlobalSearch';

const Header = () => {
  const isSeller = useAppSelector((s) => s.user.auth.isSeller);
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

        <div className={styles.search}>
          <GlobalSearch />
        </div>

        {!isSeller && (
          <Link href={Paths.SellerRegister} className={styles.seller}>
            <span>Become a Seller</span>
          </Link>
        )}

        <div className={styles.other}>
          <Link href={Paths.Martket} className={styles.market}>
            Market
          </Link>

          <Link href={Paths.Cart} className={styles.cart}>
            <div className={styles.cart_content}>
              {!!cartItemsCount && (
                <div className={styles.cartItemsCount}>5</div>
              )}
              <MdOutlineShoppingCart />
            </div>
          </Link>

          <Avatar />
        </div>
      </div>
    </nav>
  );
};

export default Header;
