import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function ProductCard({
  imageUrl,
  title,
  category,
  breed,
  age,
  price,
  location,
  productId,
}) {
  const router = useRouter();

  // Function to handle showing product details
  const handleShowDetails = () => {
    router.push(`/product/${productId}`);
  };

  return (
    <div className='w-60 h-80 rounded-lg overflow-hidden bg-secondary text-white'>
      {/* Product Image */}
      <div className='w-full h-1/2 overflow-hidden'>
        <Image
          src={imageUrl}
          alt={title}
          width={1000}
          height={1000}
          className='w-full h-full object-cover'
        />
      </div>

      {/* Product Info */}
      <div className='px-3 py-2 h-1/2 flex flex-col justify-between'>
        <div className='h-full flex flex-col justify-between'>
          {/* Title with ellipsis */}
          <p className='text-xl font-medium truncate'>{title}</p>

          <div className='flex truncate mt-1 text-sm'>
            {/* Category that adapts to fit without overflowing */}
            <p className="">
              {category}
            </p>
            <span>‎ / ‎</span>
            <p className="">
              {breed}
            </p>
            <span>‎ / ‎</span>
            <p className="truncate">
              {age}
            </p>
          </div>

          <p className='text-sm mt-1 font-medium'>₦ {price}</p>
          <div className='flex items-center mt-1'>
            <div className='w-6 h-6'>
              <Image
                src='/location-icon.png'
                alt='location'
                width={1000}
                height={1000}
                className='w-full h-full'
              />
            </div>
            <p className='text-xs'>{location}</p>
          </div>
        </div>
        <div>
          {/* Show Details Button */}
          <button
            onClick={handleShowDetails}
            className='bg-tertiary text-white w-full rounded-lg text-sm py-1 px-3 mt-2'
          >
            Show details
          </button>
        </div>
      </div>
    </div>
  );
}
