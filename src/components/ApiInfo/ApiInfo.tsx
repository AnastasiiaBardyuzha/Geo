import React, { FC } from 'react';
import '../../App.css';

export const ApiInfo: FC = () => (
  <div className="api_info">
    <p>Api info:</p>
    <ul>
      <li>
        {'Docs: '}
        <a
          href="https://openweathermap.org/current"
          target="_blank"
          rel="noopener noreferrer"
          className="api_info__link"
        >
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
);
