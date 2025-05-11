'use client';

import { useState } from 'react';
import styles from './styles.module.scss';
import Button from '../../Button/Button';
import { SlLocationPin } from 'react-icons/sl';

interface PhoneInputProps {
  name?: string;
  error?: string;
  label?: string;
  value: { lat: number; lng: number };
  isRequired?: boolean;
  onChange: (
    field: string,
    value: any,
    shouldValidate?: boolean
  ) => Promise<any>;
}

const LocationInput: React.FC<PhoneInputProps> = ({
  name = 'location',
  value = { lat: 0.0, lng: 0.0 },
  label = 'location',
  isRequired = true,
  error,
  onChange,
}) => {
  const [locationError, setError] = useState('');

  const handleLocation = () => {
    if (onChange) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            onChange(
              name,
              { lat: position.coords.latitude, lng: position.coords.longitude },
              true
            );
            setError('');
          },
          (error) => {
            setError('Cannot Access Location');
          }
        );
      } else {
        setError('Cannot Access Location');
      }
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
          type="text"
          value={`Lat ${value.lat}, Long ${value.lng}`}
          onChange={() => {}}
          onBlur={() => {}}
        />
        <Button className={styles.btn} onClick={handleLocation}>
          <SlLocationPin />
        </Button>
      </div>
      {(locationError || error) && (
        <div className={styles.error}>{locationError || error}</div>
      )}
    </div>
  );
};

export default LocationInput;
