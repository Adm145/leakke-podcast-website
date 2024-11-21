import axios from "axios";
import {useContext} from "react";
import {useTranslation} from 'react-i18next'
import {dataContext} from "../contexts/dataContext";

import emailIcon from '../assets/icons/email_icon.png'
import locationIcon from '../assets/icons/location_icon.png'
import phoneIcon from '../assets/icons/phone_icon.png'


const useForm = () => {
  const {t} = useTranslation()

  const {
    setShowToast,
    setToastSeverity,
    setToastMessage,
    setIsLoading,
    contactForm,
    setContactForm
  } = useContext(dataContext);

  const contactInfo = [
    {
      name: t("contactBottomEmailTitle"),
      icon: emailIcon,
      info: t("contactBottomEmail")
    },
    {
      name: t("contactBottomLocationTitle"),
      icon: locationIcon,
      info: t("contactBottomLocation")
    },
    {
      name: t("contactBottomPhoneNoTitle"),
      icon: phoneIcon,
      info: t("contactBottomPhoneNo")
    }
  ]

  const sumbitContactForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.post('https://api.web3forms.com/submit', contactForm)
      setIsLoading(false);
      setContactForm({שם: '', אימייל: '', הודעה: '', access_key: process.env.REACT_APP_WEB3FORMS_API});
      setShowToast(true);
      setToastSeverity('success');
      setToastMessage('ההודעה נשלחה בהצלחה');
    } catch (error) {
      setIsLoading(false);
      console.log(error.response?.data?.message || 'שגיאה בשליחת ההודעה');
      setShowToast(true);
      setToastSeverity('error');
      setToastMessage('ההודעה לא נשלחה, אנא נסו שוב');
    }
  }

  const values = {
    sumbitContactForm,
    contactInfo,
  }

  return values;

}

export default useForm;