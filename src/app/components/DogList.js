import React from 'react'
import ProductCard from './ProductCard'

const productDetails = [
  {
    imageUrl: '/Chicken-pic.png',
    title: 'Merino Sheep',
    category: 'Livestock',
    breed: 'Wool producing',
    age: '1.5 years',
    price: '120,000',
    location: 'Moniya, Ibadan',
    productId: '12350',
  },
  {
    imageUrl: '/Chicken-pic.png',
    title: 'Muscovy Duck',
    category: 'Poultry',
    breed: 'Free-range',
    age: '8 months',
    price: '60,000',
    location: 'Bodija, Ibadan',
    productId: '12351',
  },
  {
    imageUrl: '/Chicken-pic.png',
    title: 'Farm Fresh Turkey',
    category: 'Poultry',
    breed: 'Organic',
    age: '1 year',
    price: '110,000',
    location: 'Ogbomosho, Oyo',
    productId: '12352',
  },
  {
    imageUrl: '/Chicken-pic.png',
    title: 'New Zealand Rabbit',
    category: 'Livestock',
    breed: 'Well-fed',
    age: '5 months',
    price: '40,000',
    location: 'Challenge, Ibadan',
    productId: '12353',
  },
];

const DogList = () => {
  return (
    <div className='mb-5'>
      <p className='text-xl text-black mb-5 font-medium'>Dogs</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productDetails.map((product) => (
          <ProductCard
            key={product.productId}
            imageUrl={product.imageUrl}
            title={product.title}
            category={product.category}
            breed={product.breed}
            age={product.age}
            price={product.price}
            location={product.location}
            productId={product.productId}
          />
        ))}
      </div>
    </div>
  )
}

export default DogList