import axios from "axios";
import {useContext, useEffect} from "react";
import {useTranslation} from 'react-i18next'
import {dataContext} from "Context";

import emailIcon from '../assets/icons/email_icon.png'
import locationIcon from '../assets/icons/location_icon.png'
import phoneIcon from '../assets/icons/phone_icon.png'

export const useForm = () => {
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
      setContactForm({name: '', email: '', message: ''});
      setShowToast(true);
      setToastSeverity('success');
      setToastMessage('ההודעה נשלחה בהצלחה');
    } catch (error) {
      setIsLoading(false);
      console.log(error);
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
