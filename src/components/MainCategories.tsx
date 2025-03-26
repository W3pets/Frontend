import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MainCategories = () => {
  const categories = [
    { name: 'Dogs', imageUrl: '/Chicken-pic.png', categoryId: 'dogs' },
    { name: 'Fowls & Birds', imageUrl: '/Chicken-pic.png', categoryId: 'fowls-birds' },
    { name: 'Cats', imageUrl: '/Chicken-pic.png', categoryId: 'cats' },
    { name: 'Fishes', imageUrl: '/Chicken-pic.png', categoryId: 'fishes' },
    { name: 'Parrots', imageUrl: '/Chicken-pic.png', categoryId: 'parrots' },
  ];

  return (
    <div className="mb-5">
      <p className="text-xl text-black mb-5 font-medium">Categories</p>

      <div className="flex gap-28 items-center">
        {categories.map((category) => (
          <Link href={`/category/${category.categoryId}`} key={category.categoryId}>
            <div className="flex flex-col items-center cursor-pointer">
              <div className="rounded-full w-24 h-24 bg-gray-200 p-2">
                <Image
                  src={category.imageUrl}
                  alt={category.name}
                  width={1000}
                  height={1000}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <p className="text-tertiary text-lg">{category.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainCategories;
