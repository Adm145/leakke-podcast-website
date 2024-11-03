import {useContext} from 'react';
import {dataContext} from '../contexts/dataContext';

const useDirection = () => {
  const {currLang} = useContext(dataContext);
  return currLang === 'he' ? 'rtl' : 'ltr';
}

export default useDirection;
