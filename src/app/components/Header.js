import Image from 'next/image'
import React from 'react'
import SearchBar from './SearchBar'
import Link from 'next/link'

const Header = () => {
  return (
    <nav className='bg-white fixed top-0 left-0 w-full z-50'>
      <div className='container flex items-center justify-between py-4'>

        <div>
          <Link href="/"><Image src='/logo.png' alt='w3pets' width={100} height={100} className='w-32'/></Link>
        </div>

        <div className='w-6/12'>
          <SearchBar/>
        </div>

        <div className='flex items-center justify-between gap-7'>

          <p className='text-tertiary font-semibold text-xs'>Market</p>
          
          <div >
          <Image src='/cart-icon.png' alt='cart' width={100} height={100} className='w-5'/>
          </div>

          <p className='font-bold text-xs'>Seller Registration</p>

          <button className='bg-tertiary text-white py-1 px-3 rounded-sm text-xs'>Log in</button>

          <div>
            <Image src='/default-pfp.png' alt='profile picture' width={100} height={100} className='w-6'/>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Header
