import './Footer.css'
import { useTranslation } from 'react-i18next'
import { socialLinksBlack } from '../../utils/socialLinks'
import { useNavigate } from "react-router-dom";
import useDirection from '../../utils/direction';


const Footer = () => {
  const navigate = useNavigate()
  const {t} = useTranslation('translation')
  const direction = useDirection()


  const navBarItems = [
    {label: t("home"), link: "/", key: "home"},
    {label: t("about"), link: "/about", key: "about"},
    {label: t("contact"), link: "/contact", key: "contact"}
  ]

  return (
    <footer 
    className="container-fluid d-flex flex-row align-items-center justify-content-between "
    style={{height: '13rem',padding: '5rem 30rem', backgroundColor: 'var(--light-beige)'}}>
      <section className="ps-5 d-flex flex-row align-items-center gap-5">
        <nav dir={direction} className="d-flex flex-column gap-2 align-items-start">
          <h3 style={{color: 'var(--brown)'}}>
            {t('help')}
          </h3>
          {navBarItems.map((item) => (
            <button 
            className="footerNavMenuItem" 
            key={item.key} 
            onClick={() => navigate(item.link)}>
              {item.label}
            </button>
          ))}
        </nav>
        <div className="d-flex flex-column justify-content-center align-items-center px-4 ms-5">
          <h4
          style={{color: 'var(--brown)'}}>
            {t('followMe')}
          </h4>
          <div className="d-flex flex-row align-items-center pt-3 gap-3">
            {socialLinksBlack.map((item) => (
              <a 
              href={item.link} 
              key={item.name} 
              target="_blank" rel="noopener noreferrer">
                <img src={item.logo} alt={item.name} style={{height: '2rem'}}/>
              </a>
            ))}
          </div>
        </div>
      </section>
    </footer>
  )
}
export default Footer