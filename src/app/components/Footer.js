import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-secondary text-black pt-14 pb-20 pl-44">
      <div className="grid grid-cols-4 gap-4">

        <div className='pr-10'>
          <h3 className="mb-4 text-xl"><span className='text-[#228B22]'>W3</span>pets</h3>
          <p className='text-[0.8rem] mb-5 font-medium'>Cultivating Connections: Your Premier Marketplace for Thriving Pets and Livestock.</p>

          <div className='flex mb-20 items-center gap-2'>
            <Image src='/twitter.png' alt='twitter' width={40} height={40}/>
            <Image src='/telegram.png' alt='telegram' width={40} height={40}/>
            <Image src='/instagram.png' alt='instagram' width={40} height={40}/>
            <Image src='/whatsapp.png' alt='whatsapp' width={40} height={40}/>
          </div>

          <p className='flex text-[0.68rem] font-medium items-center gap-1'>Copyright <span><Image src='/copyright.png' alt='copyrights' width={10} height={10}/></span> W3pets 2024 All rights reserved</p>
        </div>

        <div className='pl-16'>
          <h3 className="text-lg mb-3">Site Map</h3>
          <ul className='text-xs flex flex-col gap-3'>
            <li><Link href="/market"><p>Market</p></Link></li>
            <li><Link href="/cart"><p>Cart</p></Link></li>
            <li><Link href="/"><p>Featured Sellers</p></Link></li>
            <li><Link href="/"><p>Sellers Registration</p></Link></li>
            <li><Link href="/"><p>Sign up</p></Link></li>
            <li><Link href="/"><p>Profile</p></Link></li>
          </ul>
        </div>

        <div className='pl-10'>
          <h3 className="text-lg mb-3">Company</h3>
          <ul className='text-xs flex flex-col gap-3'>
            <li><Link href="/"><p>Help & Support</p></Link></li>
            <li><Link href="/"><p>Terms & Conditions</p></Link></li>
            <li><Link href="/"><p>Privacy Policy</p></Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg mb-3">Resource</h3>
          <ul className='text-xs flex flex-col gap-3'>
            <li><Link href="/"><p>Partner</p></Link></li>
            <li><Link href="/"><p>Blog</p></Link></li>
            <li><Link href="/"><p>Newsletter</p></Link></li>
          </ul>
        </div>

      </div>
    </footer>
  )
}


export default Footer