import styles from './styles.module.scss';
import uniqid from 'uniqid';
import { IoCaretUp } from 'react-icons/io5';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

type Props = {
  name?: string;
  error?: string;
  label?: string;
  selected?: number;
  options: string[];
  isRequired?: boolean;
  onChange: (
    field: string,
    value: any,
    shouldValidate?: boolean
  ) => Promise<any>;
};

function SelectInput({
  name = 'select',
  error,
  label,
  onChange,
  isRequired = true,
  selected = 0,
  options,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const id = uniqid();

  const [customCN, setCN] = useState('');

  const handleChange = (i: number) => {
    onChange(name, options[i], true);
  };

  const toggleDD = () => {
    setIsOpen(() => !isOpen);
  };

  useLayoutEffect(() => {
    if (selected === -1) {
      handleChange(0);
    }
  }, []);

  useLayoutEffect(() => {
    if (isOpen) {
      setCN(styles.open);
    } else if (customCN) {
      setCN(styles.close);
      setTimeout(() => {
        setCN('');
      }, 200);
    }
  }, [isOpen]);

  const handleClose = (ev: MouseEvent) => {
    const paths = ev.composedPath();
    const show = paths.findIndex((el) => (el as HTMLElement).id === id) !== -1;
    setIsOpen(() => show);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClose);
    }

    return () => {
      document.removeEventListener('click', handleClose);
    };
  }, [isOpen]);

  return (
    <div className={styles.wrapper} id={id} ref={ref}>
      {!!label && (
        <label>
          {`${label} `} {isRequired ? <span>*</span> : ' (optional) '}
        </label>
      )}

      <div className={`${styles.input_wrapper} ${customCN}`}>
        <div onClick={toggleDD} className={styles.selected}>
          <span>{options[selected]}</span>
          <IoCaretUp className={styles.caret} />
        </div>
        <div className={styles.selections}>
          {options.map((val, i) => (
            <div
              key={uniqid()}
              onClick={() => handleChange(i)}
              className={styles.selection}
            >
              {val}
            </div>
          ))}
        </div>
      </div>

      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
}

export default SelectInput;
