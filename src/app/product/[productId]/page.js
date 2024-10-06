'use client'

import { useParams } from 'next/navigation';

const productDetails = [
  {
    imageUrl: '/Chicken-pic.png',
    title: 'Farm Fresh Chicken',
    category: 'Organic',
    breed: 'Free-range',
    age: '2 months',
    price: '97,000',
    location: 'Akobo, Ibadan',
    productId: '12345',
  },
  {
    imageUrl: '/Chicken-pic.png',
    title: 'Grass-Fed Cow',
    category: 'Livestock',
    breed: 'Grass-fed',
    age: '3 years',
    price: '250,000',
    location: 'Oyo, Ibadan',
    productId: '12346',
  },
  {
    imageUrl: '/Chicken-pic.png',
    title: 'Boer Goat',
    category: 'Livestock',
    breed: 'Free-range',
    age: '1 year',
    price: '75,000',
    location: 'Iseyin, Ibadan',
    productId: '12347',
  },
  {
    imageUrl: '/dog-pic.png',
    title: 'Vibrant Dogs',
    category: 'Poultry',
    breed: 'Organic',
    age: '1 week',
    price: '5,500',
    location: 'Molete, Ibadan',
    productId: '12348',
  },
  {
    imageUrl: '/Chicken-pic.png',
    title: 'Healthy Piglet',
    category: 'Livestock',
    breed: 'Well-fed',
    age: '6 months',
    price: '85,000',
    location: 'Eleyele, Ibadan',
    productId: '12349',
  },
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

export default function ProductPage() {
  const { productId } = useParams();

  // Find the product based on productId
  const product = productDetails.find(item => item.productId === productId);

  // Check if product is found
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="pt-20 p-8">
      <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
      <div className="flex">
        <img src={product.imageUrl} alt={product.name} className="w-1/2 h-auto object-cover rounded-lg" />
        <div className="ml-8 flex-1">
          <p className="text-lg mb-2">Category: {product.category}</p>
          <p className="text-lg mb-2">Breed: {product.breed}</p>
          <p className="text-lg mb-2">Age: {product.age}</p>
          <p className="text-lg mb-2">Location: {product.location}</p>
          <p className="text-2xl font-bold text-green-700 mb-4">{product.price}</p>
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
