'use client';

import React, { useEffect, useLayoutEffect, useState } from 'react';
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
  const [prevItems, setItems] = useState(items);
  const handleChange = (index: number) => {
    const newItem: MultiCheckItem = {
      ...prevItems[index],
      selected: !(prevItems[index]?.selected || false),
    };
    const newItems = [...prevItems];
    newItems[index] = newItem;
    if (onChange) onChange(newItems);
    setItems(newItems);
  };

  useLayoutEffect(() => {
    setItems(items);
  }, [items]);

  return (
    <div className={`${styles.items} ${className}`}>
      {prevItems.map(({ id, name, ...rest }, i) => (
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
