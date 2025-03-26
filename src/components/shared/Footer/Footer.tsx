import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.scss';
import { FaXTwitter } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section>
        <div>
          <h3 className={styles.brand}>
            <Image sizes="" src={'/logo.svg'} width={50} height={50} />
            <span className={styles.init}>W3</span>pets
          </h3>
          <div className={`${styles.slogan}`}>
            <span>
              Cultivating Connections: Your Premier Marketplace for Thriving
              Pets and Livestock.
            </span>
          </div>

          <div className={styles.social_icons}>
            <div>
              <FaXTwitter />
            </div>
            <div>
              <FaWhatsapp />
            </div>
            <div>
              <FaTelegramPlane />
            </div>
            <div>
              <FaInstagram />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h3>Site Map</h3>
          <ul>
            <li>
              <Link href="/market">
                <p>Market</p>
              </Link>
            </li>
            <li>
              <Link href="/cart">
                <p>Cart</p>
              </Link>
            </li>
            <li>
              <Link href="/">Featured Sellers</Link>
            </li>
            <li>
              <Link href="/">Sellers Registration</Link>
            </li>
            <li>
              <Link href="/">Sign up</Link>
            </li>
            <li>
              <Link href="/">Profile</Link>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div>
          <h3>Company</h3>
          <ul>
            <li>
              <Link href="/">Help & Support</Link>
            </li>
            <li>
              <Link href="/">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div>
          <h3>Resource</h3>
          <ul>
            <li>
              <Link href="/">Partner</Link>
            </li>
            <li>
              <Link href="/">Blog</Link>
            </li>
            <li>
              <Link href="/">Newsletter</Link>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <span>
          Copyright <span>&copy;</span> W3pets 2024 All rights reserved
        </span>
      </section>
    </footer>
  );
};

export default Footer;
