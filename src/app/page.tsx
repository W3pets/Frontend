'use client';

import Sidebar from '../components/Sidebar';
import CloseSellers from '../components/CloseSellers';
import DogList from '../components/DogList';
import BirdList from '../components/BirdList';
import HomeCarousel from '../components/HomeCarousel';
import MainCategories from '../components/MainCategories';

const page = () => {
  return (
    <div className="relative flex w-full flex-row bg-primary pt-20">
      <div className="w-64 pb-20">
        <Sidebar />
      </div>
      <div className="flex-1 pl-4 pr-8">
        <div>
          <HomeCarousel />
        </div>

        <div>
          <CloseSellers />
        </div>

        <div>
          <MainCategories />
        </div>

        <div>
          <p className="mb-5 text-xl font-medium text-black">Dogs</p>
          <DogList />
        </div>

        <div>
          <BirdList />
        </div>
      </div>
    </div>
  );
};

export default page;
