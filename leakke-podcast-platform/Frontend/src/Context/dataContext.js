import {createContext, useState, useEffect} from "react";

export const dataContext = createContext({});

const Provider = dataContext.Provider;

export const DataProvider = ({children}) => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
    access_key: '8708ddcf-4b00-452d-b93e-c0885079b576'
  })

  const [isLoading, setIsLoading] = useState(false)
  const [currLang, setCurrLang] = useState(() => {
    return localStorage.getItem('appLanguage') || 'he'
  })

  useEffect(() => {
    localStorage.setItem('appLanguage', currLang)
  }, [currLang])


  const [showToast, setShowToast] = useState(false);
  const [toastSeverity, setToastSeverity] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  const value = {
    currLang, setCurrLang,
    isLoading, setIsLoading,
    showToast, setShowToast,
    toastSeverity, setToastSeverity,
    toastMessage, setToastMessage,
    contactForm, setContactForm
  }

  return (
    <Provider value={value}>
      {children}
    </Provider>
  )
}