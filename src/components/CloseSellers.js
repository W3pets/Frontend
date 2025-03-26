import React from 'react'
import ProductCard from './ProductCard'


const productDetails = [
  // {
  //   imageUrl: '/Chicken-pic.png',
  //   title: 'Farm Fresh Chicken',
  //   category: 'Organic',
  //   breed: 'Free-range',
  //   age: '2 months',
  //   price: '97,000',
  //   location: 'Akobo, Ibadan',
  //   productId: '12345',
  // },
  // {
  //   imageUrl: '/Chicken-pic.png',
  //   title: 'Grass-Fed Cow',
  //   category: 'Livestock',
  //   breed: 'Grass-fed',
  //   age: '3 years',
  //   price: '250,000',
  //   location: 'Oyo, Ibadan',
  //   productId: '12346',
  // },
  // {
  //   imageUrl: '/Chicken-pic.png',
  //   title: 'Boer Goat',
  //   category: 'Livestock',
  //   breed: 'Free-range',
  //   age: '1 year',
  //   price: '75,000',
  //   location: 'Iseyin, Ibadan',
  //   productId: '12347',
  // },
  // {
  //   imageUrl: '/dog-pic.png',
  //   title: 'Vibrant Dogs',
  //   category: 'Poultry',
  //   breed: 'Organic',
  //   age: '1 week',
  //   price: '5,500',
  //   location: 'Molete, Ibadan',
  //   productId: '12348',
  // },
  // {
  //   imageUrl: '/Chicken-pic.png',
  //   title: 'Healthy Piglet',
  //   category: 'Livestock',
  //   breed: 'Well-fed',
  //   age: '6 months',
  //   price: '85,000',
  //   location: 'Eleyele, Ibadan',
  //   productId: '12349',
  // },
  {
    imageUrl: '/Chicken-pic.png',
    title: 'Merino Sheep',
    category: 'Fowls & Birds',
    breed: 'Wool producing',
    age: '1.5 years',
    price: '120,000',
    location: 'Moniya, Ibadan',
    productId: '12350',
  },
  {
    imageUrl: '/Chicken-pic.png',
    title: 'Muscovy Duck',
    category: 'Dogs',
    breed: 'Free-range',
    age: '8 months',
    price: '60,000',
    location: 'Bodija, Ibadan',
    productId: '12351',
  },
  {
    imageUrl: '/Chicken-pic.png',
    title: 'Farm Fresh Turkey',
    category: 'Cats',
    breed: 'Organic',
    age: '1 year',
    price: '110,000',
    location: 'Ogbomosho, Oyo',
    productId: '12352',
  },
  {
    imageUrl: '/Chicken-pic.png',
    title: 'New Zealand Rabbit',
    category: 'Fishes',
    breed: 'Well-fed',
    age: '5 months',
    price: '40,000',
    location: 'Challenge, Ibadan',
    productId: '12353',
  },
];



const CloseSellers = () => {
  return (
    <div className='mb-5'>
      <p className='text-xl text-black mb-5'>Sellers Closer</p>
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

export default CloseSellers