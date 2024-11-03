import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {DataProvider} from './contexts/dataContext';

import i18next from './utils/i18next';
import {I18nextProvider} from 'react-i18next';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <I18nextProvider i18n={i18next}>
      <DataProvider>
        <App />
      </DataProvider>
    </I18nextProvider>
  </BrowserRouter>
);