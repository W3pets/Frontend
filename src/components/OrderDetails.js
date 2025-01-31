import Image from 'next/image'
import React from 'react'

export const OrderDetails = ({ title, breed, age, price, count }) => {
    return (
        <div className='w-[40rem] h-36 bg-secondary rounded-md flex justify-between px-5 py-6 mb-3'>
            {/* pet description */}
            <div className='flex gap-4 items-center'>
                <div className='w-28 h-full overflow-hidden bg-primary rounded-md'>
                    <Image src='/dog-pic.png' alt='dog' width={1000} height={1000} className='w-full h-full object-cover' />
                </div>
                <div className='font-medium flex flex-col gap-2'>
                    <p className='text-lg'><b>Title:</b> {title}</p>
                    <p className='text-sm'><b>Breed/Age:</b> {breed}/{age}</p>
                    <p className='text-sm'><b>Gender:</b> Male</p>
                </div>
            </div>

            {/* pet price and delete */}
            <div className='flex flex-col justify-between items-end'>
                <div className='text-sm flex gap-2 items-center'>
                    Remove
                    <Image src='/trash-can.png' alt='remove' width={1000} height={1000} className='w-4 h-5' />
                </div>
                <p className='text-base bg-tertiary rounded-full px-2'>{count}</p>
                <div className='font-medium text-lg'>₦{price}</div>
            </div>
        </div>
    )
}
