import Image from 'next/image'
import React from 'react'
import SearchBar from './SearchBar'
import Link from 'next/link'
import { useUserContext } from '@/hooks/useUserContext'
import { useCartContext } from '@/hooks/useCartContext'

const Header = () => {
  const { user } = useUserContext()

  const { cart } = useCartContext();

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.count, 0);
  };

  const cartItemCount = getCartItemCount()

  return (
    <nav className='fixed left-0 top-0 z-50 w-full bg-white'>
      <div className='container flex items-center justify-between py-4'>
        <div>
          <Link href='/'>
            <Image
              src='/logo.png'
              alt='w3pets'
              width={100}
              height={100}
              className='w-32'
            />
          </Link>
        </div>

        <div className='w-6/12'>
          <SearchBar />
        </div>

        <div className='flex items-center justify-between gap-7'>
          <p className='text-xs font-semibold text-tertiary'>Market</p>

          {user && (
            <div className='relative'>
              {cartItemCount > 0 && (
                <div className='absolute -right-2 -top-2 rounded-full bg-tertiary px-1 text-xs'>
                  {cartItemCount}
                </div>
              )}
              <Link href='/cart'>
                <Image
                  src='/cart-icon.png'
                  alt='cart'
                  width={100}
                  height={100}
                  className='w-5'
                />
              </Link>
            </div>
          )}

          {/* should not show if one is not logged in or if have registered as a seller */}
          {user && (
            <Link href='/shop/onboarding'>
              <p className='text-xs font-bold'>Seller Registration</p>
            </Link>
          )}

          {!user && (
            <Link href='/auth/login'>
              <button className='rounded-sm bg-tertiary px-3 py-1 text-xs text-white'>
                Log in
              </button>
            </Link>
          )}

          {user && (
            <Link href='/profile'>
              <Image
                src='/default-pfp.png'
                alt='profile picture'
                width={100}
                height={100}
                className='w-6'
              />
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Header
