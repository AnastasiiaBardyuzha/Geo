import React, { FC } from 'react';
import './App.css';
import { Towns } from './components/Towns/Towns';
import { ApiInfo } from './components/ApiInfo/ApiInfo';
import { cities } from './lib/constants';

export const App: FC = () => (
  <div className="wrapper">
    <ApiInfo />
    <h1 className="app_title">APP</h1>
    <Towns cities={cities} />
  </div>
);
