import i18next from 'i18next';
import translationHE from '../components/locales/he/translation.json';
import translationEN from '../components/locales/en/translation.json';

i18next.init({
  interpolation: {escapeValue: false},
  lng: 'he',
  resources: {
    he: {translation: translationHE},
    en: {translation: translationEN}
  }
})

export default i18next;