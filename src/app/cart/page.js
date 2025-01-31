import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { OrderDetails } from '../../components/OrderDetails'

export default function page() {
  return (
    <div className="flex flex-col w-full pt-20 pb-10 bg-primary">
              <div>
        <Link href="/" className="flex items-center gap-2 px-8 pt-2 pb-0">
          <Image src="/back-arrow.png" alt="back" width={1000} height={1000} className="w-[0.6rem]" />
          <p className="text-[0.8rem] text-[#757575] font-medium">
            Back to market
          </p>
        </Link>
      </div>
      
      <div className='flex justify-between px-8 pt-2 pb-0'>
        {/* order details */}
        <div>
        <p className="text-xl text-black mb-5 font-medium">Order Details</p>
            <OrderDetails/>
            <OrderDetails/>
            <OrderDetails/>
            <div>

        {/* express delivery */}
            <div className='w-[40rem] h-10 bg-secondary rounded-md flex justify-between items-center px-5 py-6 mb-3'>
        <div className='flex gap-4 items-center'>
        <div className='flex items-end gap-3'>
            <Image src='/express-btn.png' alt='express delivery' width={1000} height={1000} className='w-6 h-6 mr-3'/>
            <Image src='/carbon_delivery.png' alt='express delivery' width={1000} height={1000} className='w-6 h-6'/>
            <p className='text-sm'>Express Shipping (2-3 business days)</p>
        </div>
        </div>

        {/* express price */}
        <div className='flex flex-col justify-between items-end'>
            <div className='font-medium text-lg'>₦3,800</div>
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
