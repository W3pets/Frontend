import Image from 'next/image'
import React from 'react'

export const OrderDetails = () => {
  return (
    <div className='w-[40rem] h-36 bg-secondary rounded-md flex justify-between px-5 py-6 mb-3'>
        {/* pet description */}
        <div className='flex gap-4 items-center'>
        <div className='w-28 h-full overflow-hidden bg-primary rounded-md'>
            <Image src='/dog-pic.png' alt='dog' width={1000} height={1000} className='w-full h-full object-cover'/>
        </div>
        <div className='font-medium flex flex-col gap-2'>
            <p className='text-lg'>Title</p>
            <p className='text-sm'>Breed/Age</p>
            <p className='text-sm'>Gender: Male</p>
        </div>
        </div>

        {/* pet price and delete */}
        <div className='flex flex-col justify-between items-end'>
            <div className='text-sm flex gap-2 items-center'>
                Remove
                <Image src='/trash-can.png' alt='remove' width={1000} height={1000} className='w-4 h-5'/>
                </div>
            <div className='font-medium text-lg'>₦97,000</div>
        </div>
    </div>
  )
}
