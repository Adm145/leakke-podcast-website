import i18next from 'i18next';
import translationHE from '../Components/locales/he/translation.json';
import translationEN from '../Components/locales/en/translation.json';

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