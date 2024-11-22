import {useContext} from 'react';
import {dataContext} from 'Context';

export const useDirection = () => {
  const {currLang} = useContext(dataContext);
  return currLang === 'he' ? 'rtl' : 'ltr';
}