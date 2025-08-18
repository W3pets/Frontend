import React, { useState } from 'react';
import Card from '@/components/shared/Cards/Card';
import Button from '@/components/shared/Button/Button';
import styles from './LocationPrompt.module.scss';
import { MdOutlineLocationOn } from 'react-icons/md';

type Props = {
  onLocationEnabled: (coords: { latitude: number; longitude: number }) => void;
  onDeny: () => void;
  onPermissionDenied: () => void;
};

const LocationPrompt: React.FC<Props> = ({ onLocationEnabled, onDeny, onPermissionDenied }) => {
  const handleAllowClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          onLocationEnabled({ latitude, longitude });
        },
        (error) => {
          console.error("Geolocation error:", error);
          onPermissionDenied();
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
      onPermissionDenied();
    }
  };

  const handleDenyClick = () => {
    onDeny();
  };

  return (
    <div className={styles.overlay}>
      <Card className={styles.popup}>
        <MdOutlineLocationOn size={48} color="rgb(44, 202, 102)" />
        <h2 className={styles.header}>Enable Location Services</h2>
        <p className={styles.text}>
          Allow W3pets to access your location to find pets available for adoption near you.
        </p>
        <p className={styles.smalltext}>
          You can change this setting anytime in your browser settings.
        </p>
        <div className={styles.actions}>
          <Button onClick={handleAllowClick}>Enable Location</Button>
          <Button isOutline onClick={handleDenyClick}>Not Now</Button>
        </div>
      </Card>
    </div>
  );
};

export default LocationPrompt;