import './ContactPage.css'
import { useContext } from 'react'
import {useTranslation} from 'react-i18next'
import { dataContext } from 'Context'
import {useForm, useDirection} from 'Hooks'
import {ToastComponent} from 'Uikit'
import collageImage from '../../assets/Images/studio_image_collage.jpg'

import { dotStream } from 'ldrs'
dotStream.register()

export const ContactPage = () => {
  const {t} = useTranslation()
  const direction = useDirection()
  const {sumbitContactForm, contactInfo} = useForm();
  const {isLoading, contactForm, setContactForm} = useContext(dataContext);

  
  return (
    <section className="contactPageContainer">
      <ToastComponent />
      <div className="contactFormContainer">
        <div dir={direction}  className="contactTextContainer">
          <h1>{t("contactTopTitle")}</h1>
          <p>{t("contactTopText")}</p>

          <form onSubmit={(e) => sumbitContactForm(e)} method="POST" className="contactForm">

            <input 
            type="text"
            name="שם" 
            placeholder={t("contactFormNamePlaceholder")}
            onChange={e => setContactForm({...contactForm, שם: e.target.value})}
            />
            <input 
            type="email"
            name="אימייל" 
            placeholder={t("contactFormEmailPlaceholder")}
            onChange={e => setContactForm({...contactForm, אימייל: e.target.value})}
            />
            <textarea 
            type="text"
            name="הודעה"
            placeholder={t("contactFormMessagePlaceholder")}
            onChange={e => setContactForm({...contactForm, הודעה: e.target.value})}
            />
            <button
            type="submit">
              {isLoading ? (
                  <l-dot-stream size="50" speed="2.5" color="brown" ></l-dot-stream>
              ) : (
                t("contactFormSubmit")
              )
            }
              </button>
          </form>

          <div className="contactInfoContainer">
            <h4>{t("contactBottomTitle")}</h4>
            {contactInfo.map((item) => (
              <div key={item.name} className="contactInfoItemContainer">
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