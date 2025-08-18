'use client';

import { useState, useEffect } from 'react';
import HomeBanner from '@/components/shared/Banner/HomeBanner/HomeBanner';
import styles from '@/components/pages/home/styles.module.scss';
import MainCategories from '@/components/pages/home/MainCategories/MainCategories';
import FeaturedProducts from '@/components/pages/home/FeaturedProducts/FeaturedProducts';
import LocationPrompt from '@/components/shared/Location/LocationPrompt';

const Page = () => {
  const [showLocationPrompt, setShowLocationPrompt] = useState(false);

  useEffect(() => {
    const checkLocationPermission = async () => {
      if ('permissions' in navigator) {
        try {
          const result = await navigator.permissions.query({ name: 'geolocation' });
          
          if (result.state === 'prompt') {
            setShowLocationPrompt(true);
          } else if (result.state === 'granted') {
            console.log("Geolocation permission already granted.");
          }

        } catch (error) {
          console.error('Error checking geolocation permissions:', error);
          setShowLocationPrompt(true);
        }
      } else {
        setShowLocationPrompt(true);
      }
    };

    checkLocationPermission();
  }, []);
  const handleLocationEnabled = (coords: { latitude: number; longitude: number }) => {
    console.log("Location enabled:", coords);
    // TODO: Here to call API to save user location (once tosin provides schemas)
    setShowLocationPrompt(false);
  };

  const handleDeny = () => {
    console.log("Location request denied by user.");
    setShowLocationPrompt(false);
  };

  const handlePermissionDenied = () => {
    console.error("User blocked location access in the browser.");
    setShowLocationPrompt(false);
  };

  return (
    <div>
      {showLocationPrompt && (
        <LocationPrompt
          onLocationEnabled={handleLocationEnabled}
          onDeny={handleDeny}
          onPermissionDenied={handlePermissionDenied}
        />
      )}
      <HomeBanner />
      <div className={styles.content}>
        <MainCategories />
        <FeaturedProducts />
      </div>
    </div>
  );
};

export default Page;