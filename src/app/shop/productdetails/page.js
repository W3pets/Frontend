import Image from 'next/image'
import React from 'react'

export default function ProductsOnboardingPage() {
  return (
    <div>
      <form className=''>
        <div>
          <p>Product Title</p>
          <input
            type="text"
            className="w-96 p-2 py-2 text-gray-800 bg-white rounded-md border border-[#757575] text-xs placeholder:text-[#757575]"
            placeholder='product title'
          />
        </div>
        <div className='relative w-fit'>
          <p>Product Category</p>
          <select
            id="category"
            defaultValue=""
            placeholder="Kindly Select Category"
            className="w-96 appearance-none cursor-pointer rounded-md border border-[#00000099] bg-transparent px-3 py-2 text-xs outline-none"
          >
            <option value="dogs" className="text-black">Dogs</option>
            <option value="birds" className="text-black">Fowls & Birds</option>
            <option value="cats" className="text-black">Cats</option>
            <option value="fishes" className="text-black">Fishes</option>
            <option value="parrots" className="text-black">Parrots</option>
            {/* More categories */}
          </select>
          <div className="pointer-events-none absolute inset-y-11 right-3 flex items-center">
            <Image src='/dropdown-arrow.png' alt='categories' width={1000} height={1000} className='w-3' />
          </div>
        </div>
        <div>
          <p>Product Breed</p>
          <input
            type="text"
            className="w-96 p-2 py-2 text-gray-800 bg-white rounded-md border border-[#757575] text-xs placeholder:text-[#757575]"
            placeholder='product breed'
          />
        </div>

        {/* video and photo divs here */}

        <div className='flex gap-5 items-center w-fit relative justify-between w-[22rem]'>
          <p>Gender:</p>
          <select
            id="gender"
            defaultValue="Male"
            className="w-52 appearance-none cursor-pointer rounded-md border border-[#00000099] bg-transparent px-3 py-2 text-xs outline-none"
          >
            <option value="dogs" className="text-black">Male</option>
            <option value="birds" className="text-black">Female</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
            <Image src='/dropdown-arrow.png' alt='categories' width={1000} height={1000} className='w-3' />
          </div>
        </div>

        <div className='flex gap-5 items-center justify-between w-[22rem]'>
          <p>Age (Months):</p>
          <input
            type="text"
            className="w-52 p-2 py-2 text-gray-800 bg-white rounded-md border border-[#757575] text-xs placeholder:text-[#757575]"
            placeholder='e.g 6'
          />
        </div>

        <div className='flex gap-5 items-center justify-between w-[22rem]'>
          <p>Price (₦):</p>
          <input
            type="text"
            className="w-52 p-2 py-2 text-gray-800 bg-white rounded-md border border-[#757575] text-xs placeholder:text-[#757575]"
            placeholder='e.g 6750'
          />
        </div>

      </form>
    </div>
  )
}
