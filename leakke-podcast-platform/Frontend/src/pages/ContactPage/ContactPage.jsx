import './ContactPage.css'
import {useTranslation} from 'react-i18next'
import {useDirection} from 'Hooks'
import {ToastComponent} from 'Uikit'
import { ContactForm, ContactDetails } from 'Pages'
import collageImage from '../../assets/Images/studio_image_collage.jpg'

import { dotStream } from 'ldrs'
dotStream.register()

export const ContactPage = () => {
  const {t} = useTranslation()
  const direction = useDirection()
  
  return (
    <section className="contactPageContainer">
      <ToastComponent />
      <div className="contactFormContainer">
        <div dir={direction}  className="contactTextContainer">
          <h1>{t("contactTopTitle")}</h1>
          <p>{t("contactTopText")}</p>

          <ContactForm />

          <ContactDetails />  
           
        </div>
        <div className="contactImageContainer">
          <img src={collageImage} alt="Collage of studio images" />
        </div>
      </div>

    </section>
  )
}