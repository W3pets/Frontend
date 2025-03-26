import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <div className="relative z-10 h-20 w-full bg-primary"></div>
      <footer className="relative z-10 bg-secondary pb-20 pl-44 pt-14 text-white">
        <div className="grid grid-cols-4 gap-4">
          <div className="pr-10">
            <h3 className="mb-4 text-xl">
              <span className="text-[#228B22]">W3</span>pets
            </h3>
            <p className="mb-5 text-[0.8rem] font-medium">
              Cultivating Connections: Your Premier Marketplace for Thriving
              Pets and Livestock.
            </p>

            <div className="mb-20 flex items-center gap-2">
              <Image src="/twitter.png" alt="twitter" width={40} height={40} />
              <Image
                src="/telegram.png"
                alt="telegram"
                width={40}
                height={40}
              />
              <Image
                src="/instagram.png"
                alt="instagram"
                width={40}
                height={40}
              />
              <Image
                src="/whatsapp.png"
                alt="whatsapp"
                width={40}
                height={40}
              />
            </div>

            <p className="flex items-center gap-1 text-[0.68rem] font-medium">
              Copyright <span>&copy;</span> W3pets 2024 All rights reserved
            </p>
          </div>

          <div className="pl-16">
            <h3 className="mb-3 text-lg">Site Map</h3>
            <ul className="flex flex-col gap-3 text-xs">
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
                <Link href="/">
                  <p>Featured Sellers</p>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <p>Sellers Registration</p>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <p>Sign up</p>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <p>Profile</p>
                </Link>
              </li>
            </ul>
          </div>

          <div className="pl-10">
            <h3 className="mb-3 text-lg">Company</h3>
            <ul className="flex flex-col gap-3 text-xs">
              <li>
                <Link href="/">
                  <p>Help & Support</p>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <p>Terms & Conditions</p>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <p>Privacy Policy</p>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-lg">Resource</h3>
            <ul className="flex flex-col gap-3 text-xs">
              <li>
                <Link href="/">
                  <p>Partner</p>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <p>Blog</p>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <p>Newsletter</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
