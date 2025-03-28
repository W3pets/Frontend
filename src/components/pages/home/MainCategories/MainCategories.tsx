import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';
import { PiDog } from 'react-icons/pi';
import { PiCat } from 'react-icons/pi';
import { LuBird } from 'react-icons/lu';
import { IoFishOutline } from 'react-icons/io5';
import { MdOutlinePets } from 'react-icons/md';
import { Paths } from '@/model/types/global';

export const dummyCategory = [
  { name: 'Dogs', ImageUrl: PiDog, categoryId: 0 },
  { name: 'Cats', ImageUrl: PiCat, categoryId: 1 },
  { name: 'Birds', ImageUrl: LuBird, categoryId: 2 },
  { name: 'Fish', ImageUrl: IoFishOutline, categoryId: 3 },
  { name: 'Other Pets', ImageUrl: MdOutlinePets, categoryId: 4 },
];

const MainCategories = () => {
  return (
    <div className={styles.cats}>
      {dummyCategory.map(({ name, categoryId, ImageUrl }) => (
        <Link
          href={`${Paths.Category}/${categoryId}`}
          key={categoryId}
          className={styles.card}
        >
          <div className={styles.image}>
            <div className={styles.cover} />
            <ImageUrl />
          </div>
          <p className={styles.name}>{name}</p>
        </Link>
      ))}
    </div>
  );
};

export default MainCategories;
