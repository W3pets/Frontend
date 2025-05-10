'use client';

import React from 'react';
import styles from './styles.module.scss';
import uniqid from 'uniqid';

export type MultiCheckItem = {
  name: string | React.ReactNode;
  id: number;
  selected?: boolean;
};
type Props = {
  onChange?: (items: MultiCheckItem[]) => any;
  items: MultiCheckItem[];
  className?: string;
  type?: 'checkbox' | 'radio';
};

function MultiChecked({
  items,
  onChange,
  className,
  type = 'checkbox',
}: Props) {
  const handleChange = (index: number) => {
    const newItem: MultiCheckItem = {
      ...items[index],
      selected: !(items[index]?.selected || false),
    };
    const newItems = [...items];
    newItems[index] = newItem;
    if (onChange) onChange(newItems);
  };

  return (
    <div className={`${styles.items} ${className}`}>
      {items.map(({ id, name, ...rest }, i) => (
        <div key={uniqid()} className={styles.item}>
          <input
            type={type}
            onChange={(ev) => handleChange(i)}
            checked={rest?.selected || false}
          />
          <div>{name}</div>
        </div>
      ))}
    </div>
  );
}

export default MultiChecked;
