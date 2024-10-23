import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="overflow-y-scroll fixed h-5/6 scrollbar-style">
    <aside className='w-60 rounded-r-xl bg-secondary px-3 py-8 max-h-max'>
      <h2 className='mb-6 text-lg text-tertiary'>Filters</h2>
      <form>

        {/* Category Filter */}
        <div className="relative mb-6">
  <label className="mb-3 block text-xs font-bold" htmlFor="category">
    Animal Category:
  </label>
  <div className="relative">
    <select
      id="category"
      className="w-full appearance-none cursor-pointer rounded-md border border-[#00000099] bg-transparent px-3 py-2 text-xs outline-none"
    >
      <option value="" disabled selected hidden className="text-[#00000066] font-semibold">
        Select Category
      </option>
      <option value="dogs" className="text-black">Dogs</option>
      <option value="birds" className="text-black">Fowls & Birds</option>
      <option value="cats" className="text-black">Cats</option>
      <option value="fishes" className="text-black">Fishes</option>
      <option value="parrots" className="text-black">Parrots</option>
      {/* More categories */}
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
      <Image src='/dropdown-arrow.png' alt='categories' width={1000} height={1000} className='w-3' />
    </div>
  </div>
</div>


        {/* Price Range Filter */}
        <div className='mb-6'>
          <label className='mb-3 block text-xs font-bold' htmlFor='priceRange'>
            Price Range:
          </label>
          <div className='flex items-center justify-center space-x-2'>
            <input
              type='number'
              id='priceMin'
              placeholder='Min'
              className='w-1/2 rounded-[4px] border border-[#00000099] placeholder:text-[#00000066] placeholder:font-semibold bg-transparent px-2 py-1 text-xs outline-none'
            />
            <div className='h-[3px] w-4 rounded-lg bg-black'></div>
            <input
              type='number'
              id='priceMax'
              placeholder='Max'
              className='w-1/2 rounded-[4px] border border-[#00000099] bg-transparent placeholder:text-[#00000066] placeholder:font-semibold px-2 py-1 text-xs outline-none'
            />
          </div>
        </div>
        {/* More Filters */}

        {/* Breed Filter */}
        <div className='mb-6'>
          <label className='mb-3 block text-xs font-bold' htmlFor='breed'>
            Breed:
          </label>
          <div className='flex space-x-2'>
            <input
              type='search'
              id='breed'
              placeholder='Select breed'
              className='w-full rounded-md border border-[#00000099] bg-transparent px-3 py-2 text-xs outline-none placeholder:text-[#00000066] placeholder:font-semibold'
            />
          </div>
        </div>

        {/* Location Filter */}
        <div className='mb-6'>
          <label className='mb-3 block text-xs font-bold' htmlFor='location'>
            Location:
          </label>
          <div className='flex space-x-2'>
            <textarea
              id='location'
              placeholder='location'
              className='h-16 w-full resize-none rounded-md border border-[#00000099] placeholder:text-[#00000066] bg-transparent px-3 py-2 text-xs outline-none placeholder:font-semibold'
            />
          </div>
        </div>

        {/* Gender Filter */}
        <div className="relative mb-6">
  <label className="mb-3 block text-xs font-bold" htmlFor="category">
    Gender:
  </label>
  <div className="relative">
    <select
      id="gender"
      className="w-full appearance-none cursor-pointer rounded-md border border-[#00000099] bg-transparent px-3 py-2 text-xs outline-none"
    >
      <option value="" disabled selected hidden className="text-[#00000066] font-semibold">
        Select Gender
      </option>
      <option value="male" className="text-black">Male</option>
      <option value="female" className="text-black">Female</option>
      <option value="none" className="text-black">Prefer not to say</option>
      {/* More categories */}
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
      <Image src='/dropdown-arrow.png' alt='categories' width={1000} height={1000} className='w-3' />
    </div>
  </div>
</div>


        {/* Weight Filter */}
        <div className='mb-6'>
          <label className='mb-3 block text-xs font-bold' htmlFor='weight'>
            Weight:
          </label>
          <div className='flex space-x-2'>
            <input
              type='search'
              id='weight'
              placeholder='Select weight (Kg)'
              className='w-full rounded-md border border-[#00000099] placeholder:text-[#00000066] bg-transparent px-3 py-2 text-xs outline-none placeholder:font-semibold'
            />
          </div>
        </div>

        {/* Age Filter */}
        <div className='mb-8'>
          <label className='mb-3 block text-xs font-bold' htmlFor='Age'>
            Age:
          </label>
          <div className='flex space-x-2'>
            <input
              type='search'
              id='age'
              placeholder='Select age (months)'
              className='w-full rounded-md border border-[#00000099] placeholder:text-[#00000066]  bg-transparent px-3 py-2 text-xs outline-none placeholder:font-semibold'
            />
          </div>
        </div>

        <button
          type='submit'
          className='w-full mb-6 rounded-lg text-xs font-semibold bg-tertiary px-4 py-2 text-white'
        >
          Apply Filters
        </button>
      </form>
    </aside>
    </div>
  )
}
