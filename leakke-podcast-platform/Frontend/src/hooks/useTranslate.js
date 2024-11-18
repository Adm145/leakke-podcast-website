import {useTranslation} from "react-i18next"
import {dataContext} from '../contexts/dataContext';
import {useContext, useEffect} from 'react';


const useTranslate = () => {
  const {i18n} = useTranslation("translation")
  const {currLang, setCurrLang} = useContext(dataContext);

  useEffect(() => {
    i18n.changeLanguage(currLang);
  }, [currLang, i18n]);

  const handleLanguageChange = (lang) => {
    setCurrLang(lang);
  }

  const values = {
    handleLanguageChange,
  }

  return values;
}
export default useTranslate;