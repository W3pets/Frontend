import Image from 'next/image';
import { Dropdown } from '../../../model/types/global';
import { dummyCategory } from '../../pages/home/MainCategories/MainCategories';
import styles from './styles.module.scss';
import { Vaccinated } from '@/model/types/product';
import Range from '../Inputs/Range/Range';
import uniqid from 'uniqid';
import MultiChecked from '../Inputs/MultiChecked/MultiChecked';

export default function Filter() {
  const dummyFilters: Dropdown[] = [
    {
      name: 'Category',
      items: dummyCategory.map((c) => ({ name: c.name, id: c.categoryId })),
    },
    {
      name: 'Price Range',
      isRange: true,
      items: [{ name: 0 }, { name: 50000 }],
    },
    {
      name: 'Age',
      items: [
        { name: 'Baby' },
        { name: 'Young' },
        { name: 'Adult' },
        { name: 'Senior' },
      ],
    },
    {
      name: 'Gender',
      items: [{ name: 'Male' }, { name: 'Female' }],
    },
    {
      name: 'Status',
      items: Object.keys(Vaccinated)
        .splice(0, 3)
        .map((c, i) => ({ name: `${c} Vaccinated`, id: i })),
    },
  ];

  return (
    <div className={styles.filters_wrapper}>
      {dummyFilters.map((f) => (
        <div className={styles.filter} key={uniqid()}>
          <div className={styles.name}>{f.name || ''}</div>
          {f.isRange && (
            <div className={styles.options}>
              <Range
                min={0}
                max={1000000}
                selectedMax={800000}
                selectedMin={20000}
              />
            </div>
          )}
          {!f.isRange && (
            <div className={styles.options}>
              <MultiChecked
                items={
                  f.items?.map((i, index) => ({
                    name: `${i.name}`,
                    id: typeof i?.id === 'number' ? i?.id : index,
                  })) || []
                }
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
