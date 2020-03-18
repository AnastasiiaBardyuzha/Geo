import React, { FC, useState } from 'react';
import { Town } from '../Town/Town';
import { Weather } from '../Weather/Weather';
import { City, WeatherInterface } from '../../types';
import { API_URL, getData } from '../../api_helpers';

type Props ={
  cities: City[];
};

export const Towns: FC<Props> = ({ cities }) => {
  const [town, setTown] = useState('Kyiv');
  const [weather, setWeather] = useState<WeatherInterface>();


  const handleTown = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const currentTown = event.currentTarget.value;
    const currentId = event.currentTarget.id;

    setTown(currentTown);

    const getWeather = () => {
      return getData(`${API_URL}${currentId}`);
    };

    const townWeather = await getWeather();

    const {
      speed: windSpeed,
    } = townWeather.wind;

    const {
      temp,
      pressure,
      humidity,
    } = townWeather.main;

    const currentWeather = {
      temp,
      pressure,
      humidity,
      windSpeed,
    };

    setWeather(currentWeather);
  };

  return (
    <>
      {cities.map(
        item => <Town key={item.id} title={item.city} id={item.id} handleTown={handleTown} />,
      )}
      {weather && <Weather town={town} weather={weather} />}
    </>
  );
};
