import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ImgProvider } from './contexts/imgContext';
import { DataProvider } from './contexts/dataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <DataProvider>
      <ImgProvider>
        <App />
      </ImgProvider>
    </DataProvider>
  </BrowserRouter>
);
