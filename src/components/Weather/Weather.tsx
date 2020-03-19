import React, { FC } from 'react';
import { WeatherInterface } from '../../lib/types';
import './Weather.css';

type Props = {
  town: string;
  weather: WeatherInterface;
};

export const Weather: FC<Props> = ({ town, weather }) => {
  const {
    temp,
    pressure,
    humidity,
    windSpeed,
  } = weather;

  return (
    <>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col" colSpan={2} className="table__title_size">{town}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className="table__title_size">Temperature</th>
            <td>{`${temp} °C`}</td>
          </tr>
          <tr>
            <th scope="row" className="table__title_size">Atmospheric pressure</th>
            <td>{`${pressure} hPa`}</td>
          </tr>
          <tr>
            <th scope="row" className="table__title_size">Humidity</th>
            <td>{`${humidity} %`}</td>
          </tr>
          <tr>
            <th scope="row" className="table__title_size">Wind speed</th>
            <td>{`${windSpeed} meter/sec`}</td>
          </tr>
          <tr>
            <th scope="row" className="table__title_size">Wind direction</th>
            <td>°</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
