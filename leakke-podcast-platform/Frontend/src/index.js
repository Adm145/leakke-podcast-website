import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {DataProvider} from './contexts/dataContext';

//i18next
import i18next from 'i18next';
import {I18nextProvider} from 'react-i18next';
import translationHE from './components/locales/he/translation.json';
import translationEN from './components/locales/en/translation.json';
i18next.init({
  interpolation: {escapeValue: false},
  lng: 'he',
  resources: {
    he: {translation: translationHE},
    en: {translation: translationEN}
  }
})

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