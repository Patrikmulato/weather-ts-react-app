import React from 'react';
import { KelvinToCelsiusConverter } from '../../utils/TemperatureConverter';

interface TemperatureProps {
  temp: number;
}

const Temperature: React.FC<TemperatureProps> = ({
  temp,
}: TemperatureProps) => {
  return <>{KelvinToCelsiusConverter(temp)}</>;
};

export default Temperature;
