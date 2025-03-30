'use client';

import styles from './styles.module.scss';

interface PhoneInputProps {
  name?: string;
  error?: string;
  label?: string;
  value?: string;
  isRequired?: boolean;
  onChange: (
    field: string,
    value: any,
    shouldValidate?: boolean
  ) => Promise<any>;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  name = 'phone',
  value = '',
  label = 'phone',
  isRequired = true,
  error,
  onChange,
}) => {
  // Function to remove non-digits and format as XXX XXX XXXX
  function formatPhoneNumber(input: string): string {
    const digits = input.replace(/\D/g, '').substring(0, 10);
    const len = digits.length;
    if (len === 0) return '';
    if (len <= 3) return digits;
    if (len <= 6) return `${digits.slice(0, 3)} ${digits.slice(3)}`;
    return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const formatted = formatPhoneNumber(rawValue);
    if (onChange) {
      onChange(name, formatted, true);
    }
  };

  return (
    <div className={styles.wrapper}>
      {!!label && (
        <label>
          {`${label} `} {isRequired ? <span>*</span> : ''}
        </label>
      )}
      <div className={styles.input_wrapper}>
        <input
          name={name}
          className={styles.input}
          type="tel"
          value={value}
          placeholder="+234 123 456 7890"
          onChange={handleChange}
          onBlur={handleChange}
        />
      </div>
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default PhoneInput;
