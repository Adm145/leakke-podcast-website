import i18next from 'i18next';
import translationHE from '../components/locales/he/translation.json';
import translationEN from '../components/locales/en/translation.json';

const savedLanguage = localStorage.getItem('appLanguage') || 'he';

i18next.init({
  interpolation: {escapeValue: false},
  lng: savedLanguage,
  resources: {
    he: {translation: translationHE},
    en: {translation: translationEN}
  }
})

export default i18next;