import './ContactForm.css'
import {useTranslation} from 'react-i18next'
import { useContext } from 'react'
import { dataContext } from 'Context'
import {useForm} from 'Hooks'


export const ContactForm = () => {
  const {sumbitContactForm} = useForm();
  const {isLoading, contactForm, setContactForm} = useContext(dataContext);
  const {t} = useTranslation()

  return (
    <form onSubmit={(e) => sumbitContactForm(e)} method="POST" className="contactForm">
      <input 
      required
      type="text"
      name="name" 
      placeholder={t("contactFormNamePlaceholder")}
      value={contactForm.name}
      onChange={e => setContactForm({...contactForm, name: e.target.value})}
      />
      <input
      required
      type="email"
      name="email" 
      placeholder={t("contactFormEmailPlaceholder")}
      value={contactForm.email}
      onChange={e => setContactForm({...contactForm, email: e.target.value})}
      />
      <textarea
      required
      type="text"
      name="message"
      placeholder={t("contactFormMessagePlaceholder")}
      value={contactForm.message}
      onChange={e => setContactForm({...contactForm, message: e.target.value})}
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
  )
}
export default ContactForm