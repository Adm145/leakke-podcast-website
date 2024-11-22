import './ContactDetails.css'
import {useForm} from 'Hooks'
import {useTranslation} from 'react-i18next'

export const ContactDetails = () => {
  const {t} = useTranslation()
  const {contactInfo} = useForm();

  return (
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
  )
}