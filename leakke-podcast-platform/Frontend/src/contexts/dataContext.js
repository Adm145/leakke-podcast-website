import {createContext, useState, useEffect} from "react";

export const dataContext = createContext({});

const Provider = dataContext.Provider;

export const DataProvider = ({children}) => {
  const [contactForm, setContactForm] = useState({
    שם: '',
    אימייל: '',
    הודעה: '',
    access_key: process.env.REACT_APP_WEB3FORMS_API
  })

  const [isLoading, setIsLoading] = useState(false)
  const [currLang, setCurrLang] = useState(() => {
    return localStorage.getItem('appLanguage') || 'he'
  })
  // const [currLang, setCurrLang] = useState('he')

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