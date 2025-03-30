'use client';

import { useState } from 'react';
import Styles from './styles.module.scss';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { FieldInputProps } from 'formik';

type Props = {
  error?: string;
  label?: string;
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
  props,
}: Readonly<Props>) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';

  return (
    <div className={Styles.wrapper}>
      {!!label && (
        <label>
          {`${label} `}
          {isRequired ? <span>*</span> : ''}
        </label>
      )}
      <div className={Styles.input_wrapper}>
        <input
          className={Styles.input}
          type={(isPassword && !showPassword) || !isPassword ? type : 'text'}
          placeholder={placeholder}
          disabled={disabled}
          {...props}
          autoComplete={isPassword ? 'off' : 'on'}
        />
        {isPassword && (
          <button
            className={Styles.see_password}
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <IoEyeOff /> : <IoEye />}
          </button>
        )}
      </div>
      {error && <div className={Styles.error}>{error}</div>}
    </div>
  );
}

export default TextInput;
