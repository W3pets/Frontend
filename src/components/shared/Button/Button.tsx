import { MouseEventHandler, useEffect, useMemo, useState } from 'react';
import styles from './styles.module.scss';
import Loader from '../Loader/Loader';
import Link from 'next/link';

type Props = {
  type?: 'submit' | 'button';
  maxTime?: number;
  isLoading?: boolean;
  className?: string;
  loaderRadius?: number;
  outline?: boolean;
  children: React.ReactNode;
  isDisabled?: boolean;
  link?: string;
  onClick?: MouseEventHandler;
};

function Button({
  type = 'button',
  children,
  className = '',
  isLoading = false,
  isDisabled = false,
  outline = false,
  onClick,
  maxTime = 0,
  link = '',
  loaderRadius,
}: Readonly<Props>) {
  const [timer, setTimer] = useState(0);

  let interval: NodeJS.Timeout | null = null;

  const handleClick = (ev: React.MouseEvent) => {
    if (!isLoading && !isDisabled && !timer && !!onClick) {
      if (maxTime) {
        setTimer(maxTime);
        interval = setInterval(() => {
          if (timer == 1) {
            if (interval) clearInterval(interval);
            setTimer(0);
          } else {
            setTimer(timer - 1);
          }
        }, 1000);
      }
      onClick(ev);
    }
  };

  useEffect(() => {
    return () => {
      if (timer || interval) {
        if (interval) clearInterval(interval);
        setTimer(0);
      }
    };
  }, []);

  const content = useMemo(
    () => (
      <>
        {' '}
        {!!timer && <Loader radius={loaderRadius} />}
        {children}
        {isLoading && <Loader radius={loaderRadius} />}
        {!!timer && `(${timer}s)`}
      </>
    ),
    [isLoading, timer]
  );

  return !link ? (
    <button
      type={type}
      onClick={handleClick}
      className={`${className} ${styles.button} ${isDisabled || timer ? styles.disabled : ''} ${
        outline ? styles.outline : ''
      }`}
    >
      {content}
    </button>
  ) : (
    <Link
      href={link}
      className={`${className} ${styles.button} ${isDisabled || timer ? styles.disabled : ''} ${
        outline ? styles.outline : ''
      }`}
    >
      {content}
    </Link>
  );
}

export default Button;
