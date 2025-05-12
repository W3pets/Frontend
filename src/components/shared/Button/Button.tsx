import { MouseEventHandler, useState } from 'react';
import styles from './styles.module.scss';
import Loader from '../Loader/Loader';

type Props = {
  type?: 'submit' | 'button';
  maxTime?: number;
  isLoading?: boolean;
  className?: string;
  loaderRadius?: number;
  outline?: boolean;
  children: React.ReactNode;
  isDisabled?: boolean;
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

  useState(() => {
    return () => {
      if (timer || interval) {
        if (interval) clearInterval(interval);
        setTimer(0);
      }
    };
  }, []);

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`${className} ${styles.button} ${isDisabled || timer ? styles.disabled : ''} ${
        outline ? styles.outline : ''
      }`}
    >
      {!!timer && <Loader radius={loaderRadius} />}
      {children}
      {isLoading && <Loader radius={loaderRadius} />}
      {!!timer && `(${timer}s)`}
    </button>
  );
}

export default Button;
