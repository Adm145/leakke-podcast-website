import './Header.css'
import LanguageChangeButton from '../LanguageChangeButton/LanguageChangeButton'
import { socialLinksWhite } from '../../utils/socialLinks'
import podcastLogo from '../../assets/logos/podcast_logo.png'
import {useTranslation} from "react-i18next"
import { useNavigate } from "react-router-dom";


const Header = () => {

  const navigate = useNavigate()
  const [t] = useTranslation("translation")

  const navBarItems = [
    {label: t("home"), link: "/", key: "home"},
    {label: t("about"), link: "/about", key: "about"},
    {label: t("contact"), link: "/contact", key: "contact"}
  ]

  return (
    <header className="container-fluid d-flex align-items-center justify-content-between px-3" style={{ height: '15%', backgroundColor: 'var(--white)'}}>

      <div 
      className="d-flex flex-grow-4 align-items-center gap-3"
      >
        <img 
        src={podcastLogo} 
        alt="podcast logo" 
        style={{width: '65px', height: '65px'}}
        />

        <h4
        className="text-nowrap"
        style={{color: 'var(--black)'}}
        >Leakeberhan Yitshak Podcast</h4>
      </div>

      <nav 
      className="d-flex justify-content-between align-items-center gap-5 mb"
      style={{width: '40%'}}
      >
          <section>
            {navBarItems.map((item) => (
              <button 
              className="headerNavMenuItem mx-4 px-1" 
              style={{color: 'var(--light-gray)'}}
              key={item.key} 
              onClick={() => navigate(item.link)}
              >
                {item.label}
              </button>
            ))}
          </section>
          <LanguageChangeButton />
        </nav>


        {/* <section className="d-flex flex-row justify-content-end gap-2">
          {socialLinksWhite.map((item) => (
            <a href={item.link} key={item.name} target="_blank" rel="noopener noreferrer">
              <img src={item.logo} alt={item.name} className="headerLinkItem" />
            </a>
          ))}
        </section> */}

    </header>
  )
}
export default Header