import { useState, useEffect } from 'react';
export const usePosition = () => {
  const [position, setPosition] = useState<{
    latitude: number;
    longitude: number;
  }>({ latitude: 0, longitude: 0 });
  const [error, setError] = useState<null | string>(null);

  const onChange = ({ coords }: Position) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
  };
  const onError = (error: PositionError) => {
    setError(error.message);
  };
  useEffect(() => {
    const getLocation = () => {
      const geo = navigator.geolocation;
      if (!geo) {
        setError('Geolocation is not supported');
        return;
      }
      const watcher = geo.watchPosition(onChange, onError);
      return () => geo.clearWatch(watcher);
    };
    getLocation();
  }, []);
  error && console.log(error);
  return position;
};
