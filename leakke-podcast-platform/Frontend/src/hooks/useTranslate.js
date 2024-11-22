import {useContext, useEffect} from 'react';
import {useTranslation} from "react-i18next"
import {dataContext} from 'Context';

export const useTranslate = () => {
  const {i18n} = useTranslation("translation")
  const {currLang, setCurrLang} = useContext(dataContext);

  useEffect(() => {
    const language = localStorage.getItem('appLanguage') || currLang;
    i18n.changeLanguage(language);
  }, [currLang, i18n]);

  const handleLanguageChange = (lang) => {
    setCurrLang(lang)
    localStorage.setItem('appLanguage', lang)
  }

  const values = {
    handleLanguageChange,
  }

  return values;
}