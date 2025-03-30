import { MouseEventHandler } from 'react';
import styles from './styles.module.scss';
import Loader from '../Loader/Loader';

type Props = {
  type?: 'submit' | 'button';
  isLoading?: boolean;
  className?: string;
  loaderRadius?: number;
  outline?: boolean;
  children: React.ReactNode;
  onClick?: MouseEventHandler;
};

function Button({
  type = 'button',
  children,
  className = '',
  isLoading = false,
  outline = false,
  onClick,
  loaderRadius,
}: Readonly<Props>) {
  return (
    <button
      type={type}
      onClick={!isLoading && !!onClick ? onClick : undefined}
      className={`${className} ${styles.button} ${
        outline ? styles.outline : ''
      }`}
    >
      {children}
      {isLoading && <Loader radius={loaderRadius} />}
    </button>
  );
}

export default Button;
