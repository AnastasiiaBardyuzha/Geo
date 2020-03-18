/* eslint-disable react/jsx-no-target-blank */
import React, { FC } from 'react';
import './App.css';
import { Towns } from './components/Towns/Towns';
import { City } from './types';


const cities: City[] = [
  {
    id: 703448,
    city: 'Kyiv',
  },
  {
    id: 2643743,
    city: 'London',
  },
  {
    id: 5128638,
    city: 'New York',
  },
];

export const App: FC = () => {
  return (
    <div className="wrapper">
      <div className="api_info">
        <p>Api info:</p>
        <ul>
          <li>
            {'Docs: '}
            <a href="https://openweathermap.org/current" target="_blank" className="api_info__link">
            https://openweathermap.org/current
            </a>
          </li>
          <li>
            {'Api key: '}
            <span className="api_info__key">
              hidden
            </span>
          </li>
        </ul>
      </div>

      <h1 className="app_title">APP</h1>
      <Towns cities={cities} />
    </div>
  );
};
