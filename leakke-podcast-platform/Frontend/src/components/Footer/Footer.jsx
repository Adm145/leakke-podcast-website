import './Footer.css'
import { useTranslation } from 'react-i18next'
import { useNavigate } from "react-router-dom";
import { socialLinksBlack } from 'Utils';
import { useDirection } from 'Hooks';


export const Footer = () => {
  const navigate = useNavigate()
  const {t} = useTranslation('translation')
  const direction = useDirection()


  const navBarItems = [
    {label: t("home"), link: "/", key: "home"},
    {label: t("about"), link: "/about", key: "about"},
    {label: t("contact"), link: "/contact", key: "contact"}
  ]

  return (
    <footer>
      <section>
        <nav className="footerNavContainer" dir={direction}>
          <h3>
            {t('help')}
          </h3>
          {navBarItems.map((item) => (
            <button 
            key={item.key} 
            onClick={() => navigate(item.link)}>
              {item.label}
            </button>
          ))}
        </nav>
        <div className="footerSocialsContainer">
          <h4>
            {t('followMe')}
          </h4>
          <div>
            {socialLinksBlack.map((item) => (
              <a 
              href={item.link} 
              key={item.name} 
              target="_blank" rel="noopener noreferrer">
                <img src={item.logo} alt={item.name}/>
              </a>
            ))}
          </div>
        </div>
      </section>
    </footer>
  )
}