import './Footer.css'
import podcastLogo from '../../assets/logos/podcast_logo.jpg'
import { useTranslation } from 'react-i18next'
import { socialLinksBlack } from '../../utils/socialLinks'
import { useNavigate } from "react-router-dom";
import useDirection from '../../utils/direction';


const Footer = () => {
  const navigate = useNavigate()
  const {t} = useTranslation('translation')
  const direction = useDirection()

  const footerLogoStyle = {
    height: '10rem',
    mixBlendMode: 'multiply',
    borderRadius: '50%'
  }

  const navBarItems = [
    {label: t("home"), link: "/", key: "home"},
    {label: t("about"), link: "/about", key: "about"},
    {label: t("contact"), link: "/contact", key: "contact"}
  ]

  return (
    <footer className="mt-5 mb-3">

      <div className='container-fluid d-flex flex-row align-items-center justify-content-between' 
      style={{height: '10rem',padding: '5rem 30rem' }}>
      <section>
        <img src={podcastLogo} alt ="Podcast Logo" style={footerLogoStyle}/> 
      </section>

      {/* vertical divider */}
      <div className="h-100 py-5" style={{border: '1px var(--brown-light) solid'}}></div>

      <section className="ps-5 d-flex flex-row align-items-center gap-3">
        <nav dir={direction} className="d-flex flex-column gap-2 align-items-start" >
          <h3 style={{color: 'var(--brown-light)'}}>
            {t('help')}
          </h3>
          {navBarItems.map((item) => (
            <button className="footerNavMenuItem" key={item.key} onClick={() => navigate(item.link)}>
              {item.label}
            </button>
      ))}
        </nav>
        <div className="d-flex flex-column justify-content-center align-items-center px-4 ms-5">
          <h4 style={{color: 'var(--brown-light)'}}>
            {t('followMe')}
          </h4>
          <div className="d-flex flex-row align-items-center pt-3 gap-3">
            {socialLinksBlack.map((item) => (
              <a href={item.link} key={item.name} target="_blank" rel="noopener noreferrer">
                <img src={item.logo} alt={item.name} style={{height: '2rem'}}/>
              </a>
            ))}
          </div>
        </div>
      </section>
      </div>

    </footer>
  )
}
export default Footer