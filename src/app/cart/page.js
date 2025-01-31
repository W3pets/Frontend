'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { OrderDetails } from '../../components/OrderDetails'
import { useCartContext } from '@/hooks/useCartContext'

export default function page() {
  const { cart } = useCartContext();
  console.log(cart)

  if (cart.length <= 0) {
    return (
      <div className='flex w-full items-center flex-col bg-primary pb-10 pt-20'>
        <p>No items on your cart...</p>
      </div>
    )
  }

  const getTotalPrice = () => cart.reduce((total, item) => item.price * item.count, 0);
  const totalPrice = getTotalPrice();

  return (
    <div className='flex w-full flex-col bg-primary pb-10 pt-20'>
      <div>
        <Link href='/' className='flex items-center gap-2 px-8 pb-0 pt-2'>
          <Image
            src='/back-arrow.png'
            alt='back'
            width={1000}
            height={1000}
            className='w-[0.6rem]'
          />
          <p className='text-[0.8rem] font-medium text-[#757575]'>
            Back to market
          </p>
        </Link>
      </div>

      <div className='flex justify-between px-8 pb-0 pt-2'>
        {/* order details */}
        <div>
          <p className='mb-5 text-xl font-medium text-black'>Order Details</p>
          {cart.map((item, index) => (
            <OrderDetails
              key={index}
              title={item.title}
              breed={item.breed}
              age={item.age}
              price={item.price}
              count={item.count}
            />
          ))}
          <div>
            {/* express delivery */}
            <div className='mb-3 flex h-10 w-[40rem] items-center justify-between rounded-md bg-secondary px-5 py-6'>
              <div className='flex items-center gap-4'>
                <div className='flex items-end gap-3'>
                  <Image
                    src='/express-btn.png'
                    alt='express delivery'
                    width={1000}
                    height={1000}
                    className='mr-3 h-6 w-6'
                  />
                  <Image
                    src='/carbon_delivery.png'
                    alt='express delivery'
                    width={1000}
                    height={1000}
                    className='h-6 w-6'
                  />
                  <p className='text-sm'>
                    Express Shipping (2-3 business days)
                  </p>
                </div>
              </div>

              {/* express price */}
              <div className='flex flex-col items-end justify-between'>
                <div className='text-lg font-medium'>₦{totalPrice.toFixed(2)}</div>
              </div>
            </div>
          </div>
        </div>

        {/* payment method */}
        <div></div>
      </div>
    </div>
  )
}
