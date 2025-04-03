'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { FieldInputProps } from 'formik';

type Props = {
  error?: string;
  label?: string;
  maxLength?: number;
  type?: 'text' | 'textarea' | 'password' | 'email';
  placeholder?: string;
  disabled?: boolean;
  isRequired?: boolean;
  props: FieldInputProps<any>;
};

function TextInput({
  label = '',
  type = 'text',
  error = '',
  placeholder = '',
  disabled = false,
  isRequired = true,
  maxLength = 100,
  props,
}: Readonly<Props>) {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const isTextArea = type == 'textarea';

  const adjustHeight = () => {
    if (inputRef.current) {
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  };

  useLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener('input', adjustHeight);
    }
    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener('input', adjustHeight);
      }
    };
  }, [inputRef.current]);

  return (
    <div className={styles.wrapper}>
      {!!label && (
        <label>
          {`${label} `}
          {isRequired ? <span>*</span> : ''}
        </label>
      )}
      <div className={styles.input_wrapper}>
        {isTextArea && (
          <textarea
            ref={inputRef}
            maxLength={maxLength}
            {...props}
            disabled={disabled}
            placeholder={placeholder}
            className={styles.input}
          />
        )}
        {!isTextArea && (
          <input
            className={styles.input}
            type={(isPassword && !showPassword) || !isPassword ? type : 'text'}
            placeholder={placeholder}
            disabled={disabled}
            {...props}
            autoComplete={isPassword ? 'off' : 'on'}
          />
        )}
        {isPassword && (
          <button
            className={styles.see_password}
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <IoEyeOff /> : <IoEye />}
          </button>
        )}
      </div>
      {(!!error || isTextArea) && (
        <div className={styles.info}>
          {error && <div className={styles.error}>{error}</div>}
          {isTextArea && (
            <div
              className={styles.max}
            >{`${props.value.length} / ${maxLength}`}</div>
          )}
        </div>
      )}
      <></>
    </div>
  );
}

export default TextInput;
