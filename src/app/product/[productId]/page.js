'use client'

import ProductCard from '@/components/shared/ProductCard/ProductCard'
import { useCartContext } from '@/hooks/useCartContext'
import { useUserContext } from '@/hooks/useUserContext'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const productDetails = [
  {
    images: [
      '/dog-pic.png',
      '/dog1-pic2.png',
      '/dog1-pic3.png',
      '/dog1-pic4.png',
      '/dog1-pic5.png',
      '/dog1-pic6.png'
    ],
    title: 'Golden Retriever',
    category: 'Dogs',
    breed: 'Golden Retriever',
    age: '2 years',
    price: '150,000',
    location: 'Lekki, Lagos',
    productId: '12350',
    weight: '30 kg',
    gender: 'Male',
    description: 'A friendly and loyal Golden Retriever, perfect for families.',
    reviews: [
      {
        user: 'John Doe',
        rating: 4,
        comment: 'Great companion, very well-trained!'
      },
      {
        user: 'Jane Smith',
        rating: 5,
        comment: 'Amazing dog, very gentle and playful.'
      }
    ],
    sellerName: 'Happy Paws Kennels'
  },
  {
    images: [
      '/dog-pic.png',
      '/dog2-pic2.png',
      '/dog2-pic3.png',
      '/dog2-pic4.png',
      '/dog2-pic5.png',
      '/dog2-pic6.png'
    ],
    title: 'German Shepherd',
    category: 'Dogs',
    breed: 'German Shepherd',
    age: '1.5 years',
    price: '180,000',
    location: 'Victoria Island, Lagos',
    productId: '12351',
    weight: '35 kg',
    gender: 'Female',
    description: 'A highly intelligent and protective German Shepherd.',
    reviews: [
      {
        user: 'Peter Parker',
        rating: 5,
        comment: 'Very smart and great for security.'
      },
      {
        user: 'Mary Jane',
        rating: 4,
        comment: 'Strong and obedient, a good pet.'
      }
    ],
    sellerName: 'Guard Dog Experts'
  },
  {
    images: [
      '/bird-pic.png',
      '/bird1-pic2.png',
      '/bird1-pic3.png',
      '/bird1-pic4.png',
      '/bird1-pic5.png',
      '/bird1-pic6.png'
    ],
    title: 'Merino Sheep',
    category: 'Fowls & Birds',
    breed: 'Wool producing',
    age: '1.5 years',
    price: '120,000',
    location: 'Moniya, Ibadan',
    productId: '12352',
    weight: '25 kg',
    gender: 'Male',
    description: 'Healthy Merino sheep known for producing high-quality wool.',
    reviews: [
      {
        user: 'Alice Cooper',
        rating: 5,
        comment: 'Excellent wool quality, very healthy.'
      }
    ],
    sellerName: 'Woolly Farm'
  },
  {
    images: [
      '/parrot-pic.png',
      '/parrot1-pic2.png',
      '/parrot1-pic3.png',
      '/parrot1-pic4.png',
      '/parrot1-pic5.png',
      '/parrot1-pic6.png'
    ],
    title: 'African Grey Parrot',
    category: 'Parrots',
    breed: 'African Grey',
    age: '10 months',
    price: '100,000',
    location: 'Bodija, Ibadan',
    productId: '12353',
    weight: '1.2 kg',
    gender: 'Female',
    description: 'A talkative African Grey Parrot, known for its intelligence.',
    reviews: [
      {
        user: 'Bruce Wayne',
        rating: 4,
        comment: 'Very smart, learns words quickly.'
      }
    ],
    sellerName: 'Exotic Birds Hub'
  },
  {
    images: [
      '/cat-pic.png',
      '/cat1-pic2.png',
      '/cat1-pic3.png',
      '/cat1-pic4.png',
      '/cat1-pic5.png',
      '/cat1-pic6.png'
    ],
    title: 'Siamese Cat',
    category: 'Cats',
    breed: 'Siamese',
    age: '8 months',
    price: '85,000',
    location: 'Ogbomosho, Oyo',
    productId: '12354',
    weight: '5 kg',
    gender: 'Male',
    description: 'A playful Siamese cat with a beautiful coat and blue eyes.',
    reviews: [
      { user: 'Clark Kent', rating: 5, comment: 'Very active and friendly.' }
    ],
    sellerName: 'Feline Friends'
  },
  {
    images: [
      '/fish-pic.png',
      '/fish1-pic2.png',
      '/fish1-pic3.png',
      '/fish1-pic4.png',
      '/fish1-pic5.png',
      '/fish1-pic6.png'
    ],
    title: 'Goldfish',
    category: 'Fish',
    breed: 'Common Goldfish',
    age: '1 year',
    price: '5,000',
    location: 'Challenge, Ibadan',
    productId: '12355',
    weight: '200 g',
    gender: 'Female',
    description: 'A beautiful goldfish, perfect for aquariums.',
    reviews: [
      {
        user: 'Lois Lane',
        rating: 5,
        comment: 'Lovely fish, bright and lively.'
      }
    ],
    sellerName: 'Aquatic Wonders'
  },
  {
    images: [
      '/dog-pic.png',
      '/dog3-pic2.png',
      '/dog3-pic3.png',
      '/dog3-pic4.png',
      '/dog3-pic5.png',
      '/dog3-pic6.png'
    ],
    title: 'Bulldog',
    category: 'Dogs',
    breed: 'Bulldog',
    age: '3 years',
    price: '200,000',
    location: 'Ojota, Lagos',
    productId: '12356',
    weight: '25 kg',
    gender: 'Male',
    description: 'A sturdy Bulldog, well-socialized and perfect for a family.',
    reviews: [
      { user: 'Barry Allen', rating: 4, comment: 'Very loving and gentle.' }
    ],
    sellerName: 'Paw Perfect'
  },
  {
    images: [
      '/parrot-pic.png',
      '/parrot2-pic2.png',
      '/parrot2-pic3.png',
      '/parrot2-pic4.png',
      '/parrot2-pic5.png',
      '/parrot2-pic6.png'
    ],
    title: 'Cockatiel',
    category: 'Parrots',
    breed: 'Cockatiel',
    age: '6 months',
    price: '55,000',
    location: 'Mokola, Ibadan',
    productId: '12357',
    weight: '0.9 kg',
    gender: 'Male',
    description: 'A friendly Cockatiel that loves to whistle and sing.',
    reviews: [
      {
        user: 'Diana Prince',
        rating: 5,
        comment: 'Beautiful bird, very vocal.'
      }
    ],
    sellerName: 'Feathered Friends'
  },
  {
    images: [
      '/cat-pic.png',
      '/cat2-pic2.png',
      '/cat2-pic3.png',
      '/cat2-pic4.png',
      '/cat2-pic5.png',
      '/cat2-pic6.png'
    ],
    title: 'Persian Cat',
    category: 'Cats',
    breed: 'Persian',
    age: '1 year',
    price: '130,000',
    location: 'Yaba, Lagos',
    productId: '12358',
    weight: '4.5 kg',
    gender: 'Female',
    description:
      'A calm Persian cat with a fluffy coat, great for a relaxed environment.',
    reviews: [
      { user: 'Hal Jordan', rating: 4, comment: 'Very calm and well-behaved.' }
    ],
    sellerName: 'Royal Pets'
  },
  {
    images: [
      '/fish-pic.png',
      '/fish2-pic2.png',
      '/fish2-pic3.png',
      '/fish2-pic4.png',
      '/fish2-pic5.png',
      '/fish2-pic6.png'
    ],
    title: 'Betta Fish',
    category: 'Fish',
    breed: 'Betta',
    age: '7 months',
    price: '10,000',
    location: 'Ibadan North, Ibadan',
    productId: '12359',
    weight: '150 g',
    gender: 'Male',
    description:
      'A vibrant Betta fish, known for its bright colors and flowing fins.',
    reviews: [
      {
        user: 'Arthur Curry',
        rating: 5,
        comment: 'Beautiful fish, very easy to care for.'
      }
    ],
    sellerName: 'Fin Friends'
  }
]

export default function ProductPage() {
  const { productId } = useParams()
  const { user } = useUserContext()
  const { dispatch: cartDispatch } = useCartContext();

  const product = productDetails.find(item => item.productId === productId)

  if (!product) {
    return (
      <div className='flex items-center justify-center p-8 pt-64 text-6xl font-semibold'>
        Product not found
      </div>
    )
  }

  const handleAddToCart = async () => {
    if (user) {
      cartDispatch({ type: 'ADD_TO_CART', payload: product });
    } else {
      alert('You need to be logged in!');
    }
  };

  return (
    <div className='flex w-full flex-col bg-primary p-8 pt-20'>
      <div>
        <Link href='/' className='flex items-center gap-2 pb-0 pt-2'>
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

      <div>
        <div className='flex w-full flex-row justify-between pt-6'>
          <div className='flex w-8/12 flex-col'>
            <div className='flex w-full gap-5'>
              <div className='flex flex-col gap-4'>
                <div className='h-20 w-28 overflow-hidden rounded-md bg-[#757575]'></div>
                <div className='h-20 w-28 overflow-hidden rounded-md bg-[#757575]'></div>
                <div className='h-20 w-28 overflow-hidden rounded-md bg-[#757575]'></div>
                <div className='h-20 w-28 overflow-hidden rounded-md bg-[#757575]'></div>
                <div className='h-20 w-28 overflow-hidden rounded-md bg-[#757575]'></div>
              </div>

              <div className='h-[29rem] w-full overflow-hidden'>
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className='h-full w-full rounded-lg object-cover'
                />
              </div>
            </div>

            <div>
              <p>REVIEW</p>
            </div>
          </div>

          <div className='w-4/12'>
            <div className='ml-8 flex-1 rounded-md border border-[#757575] p-3'>
              <p className='mb-2 text-lg'>Category: {product.category}</p>
              <p className='mb-2 text-lg'>Breed: {product.breed}</p>
              <p className='mb-2 text-lg'>Age: {product.age}</p>
              <p className='mb-2 text-lg'>Location: {product.location}</p>
              <p className='mb-4 text-2xl font-bold text-green-700'>
                {product.price}
              </p>
              <button
                className='rounded-lg bg-green-500 px-6 py-2 text-white'
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className='mb-5'>
          <p className='mb-5 text-xl text-[#757575]'>Recommended Pets</p>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
            {productDetails.map(product => (
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
      </div>
    </div>
  )
}
