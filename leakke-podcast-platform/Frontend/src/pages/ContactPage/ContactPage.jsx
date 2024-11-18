import './ContactPage.css'
// import { useState } from 'react'
import {useTranslation} from 'react-i18next'
import collageImage from '../../assets/Images/studio_image_collage.jpg'
import useDirection from '../../utils/direction'

import emailIcon from '../../assets/icons/email_icon.png'
import locationIcon from '../../assets/icons/location_icon.png'
import phoneIcon from '../../assets/icons/phone_icon.png'


//* web3forms api = process.env.REACT_APP_WEB3FORMS_API
const ContactPage = () => {
  const {t} = useTranslation()
  const direction = useDirection()
  // const [contactForm, setContactForm] = useState({
  //   name: '',
  //   email: '',
  //   message: ''
  // })

  const contactInfo = [
    {name: t("contactBottomEmailTitle"), icon: emailIcon, info: t("contactBottomEmail")},
    {name: t("contactBottomLocationTitle"), icon: locationIcon, info: t("contactBottomLocation")},
    {name: t("contactBottomPhoneNoTitle"), icon: phoneIcon, info: t("contactBottomPhoneNo")}
  ]

  // const handleSetContactForm = (e) => {
  //   const { name, value } = e.target;
  //   setContactForm(prevState => ({
  //       ...prevState,
  //       [name]: value
  //   }));
  // }

  
  return (
    <section className="contactPageContainer">
      
      <div className="contactFormContainer">
        <div dir={direction}  className="contactTextContainer">
          <h1>{t("contactTopTitle")}</h1>
          <p>{t("contactTopText")}</p>

          <form className="contactForm">
            <input type="text" placeholder={t("contactFormNamePlaceholder")} />
            <input type="email" placeholder={t("contactFormEmailPlaceholder")} />
            <textarea type="text" placeholder={t("contactFormMessagePlaceholder")} />
            <button type="submit">{t("contactFormSubmit")}</button>
          </form>

          <div className="contactInfoContainer">
            <h4>{t("contactBottomTitle")}</h4>
            {contactInfo.map((item) => (
              <div className="contactInfoItemContainer">
                <section className="contactIconContainer">
                  <img src={item.icon} alt={item.name} />
                </section>

                <section className="contactDetailsContainer">
                  <span>{item.name}</span>
                  <span>{item.info}</span>
                </section>
              </div>
            ))}

          </div>
        </div>

        <div className="contactImageContainer">
          <img src={collageImage} alt="Collage of studio images" />
        </div>
      </div>

    </section>
  )
}
export default ContactPage