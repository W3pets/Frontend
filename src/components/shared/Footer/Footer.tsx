import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.scss';
import { FaXTwitter } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import { ImgPaths, Paths } from '@/model/types/global';
import consts from '@/model/consts';
import { AuthPaths } from '@/model/types/user/auth';
import { SellerPaths } from '@/model/types/seller';

type Props = {
  isMinInfo?: boolean;
};
const Footer = ({ isMinInfo = false }: Props) => {
  return (
    <footer className={`${styles.footer} ${styles.is_min}`}>
      {isMinInfo && (
        <div className={styles.min_content}>
          <span>
            Copyright <span>&copy;</span> W3pets 2024 All rights reserved
          </span>
        </div>
      )}
      {!isMinInfo && (
        <div className={styles.content}>
          <section>
            <div>
              <h3 className={styles.brand}>
                <Image
                  src={ImgPaths.Logo}
                  width={50}
                  height={50}
                  alt="app logo"
                />
                <span className={styles.init}>W3</span>pets
              </h3>
              <div className={`${styles.slogan}`}>
                <span>
                  Cultivating Connections: Your Premier Marketplace for Thriving
                  Pets and Livestock.
                </span>
              </div>

              <div className={styles.social_icons}>
                <Link href={consts.global.url.socials.x}>
                  <FaXTwitter />
                </Link>
                <Link href={consts.global.url.socials.whatsApp}>
                  <FaWhatsapp />
                </Link>
                <Link href={consts.global.url.socials.telegram}>
                  <FaTelegramPlane />
                </Link>
                <Link href={consts.global.url.socials.instagram}>
                  <FaInstagram />
                </Link>
              </div>
            </div>
          </section>

          <section>
            <div>
              <h3>Site Map</h3>
              <ul>
                <li>
                  <Link href={Paths.Cart}>
                    <p>Market</p>
                  </Link>
                </li>
                <li>
                  <Link href={Paths.Cart}>
                    <p>Cart</p>
                  </Link>
                </li>
                <li>
                  <Link href={Paths.SellersFeatured}>Featured Sellers</Link>
                </li>
                <li>
                  <Link href={`${Paths.Sellers}${SellerPaths.SellerRegister}`}>
                    Sellers Registration
                  </Link>
                </li>
                <li>
                  <Link href={`${Paths.Auth}${AuthPaths.Register}`}>
                    Sign up
                  </Link>
                </li>
                <li>
                  <Link href={Paths.Profile}>Profile</Link>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <div>
              <h3>Company</h3>
              <ul>
                <li>
                  <Link href={Paths.Help}>Help & Support</Link>
                </li>
                <li>
                  <Link href={Paths.Terms}>Terms & Conditions</Link>
                </li>
                <li>
                  <Link href={Paths.Privacy}>Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <div>
              <h3>Resource</h3>
              <ul>
                <li>
                  <Link href={`${Paths.Sellers}${SellerPaths.SellerRegister}`}>
                    Partner
                  </Link>
                </li>
                <li>
                  <Link href={Paths.Default}>Blog</Link>
                </li>
                <li>
                  <Link href="#newsletter">Newsletter</Link>
                </li>
              </ul>
            </div>
          </section>
          <section>
            <span>
              Copyright <span>&copy;</span> W3pets 2024 All rights reserved
            </span>
          </section>
        </div>
      )}
    </footer>
  );
};

export default Footer;
