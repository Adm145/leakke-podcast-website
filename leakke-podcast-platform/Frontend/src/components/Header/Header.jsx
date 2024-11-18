import './Header.css'
import LanguageChangeButton from '../LanguageChangeButton/LanguageChangeButton'
import podcastLogo from '../../assets/logos/podcast_logo.png'
import {useTranslation} from "react-i18next"
import { useNavigate } from "react-router-dom";
import useDirection from '../../utils/direction';


const Header = () => {

  const navigate = useNavigate()
  const [t] = useTranslation("translation")
  const direction = useDirection()

  const navBarItems = [
    {label: t("home"), link: "/", key: "home"},
    {label: t("about"), link: "/about", key: "about"},
    {label: t("contact"), link: "/contact", key: "contact"}
  ]

  return (
    <header >

      <div className="headerBrandContainer">
        <img src={podcastLogo} alt="podcast logo" />

        <h4>
          {t("podcastTitle")}
        </h4>
      </div>

      <nav 
      className="headerNavContainer"
      style={{width: '40%'}}
      >
        <section
        dir={direction}
        >
          {navBarItems.map((item) => (
          <button 
          className="headerNavMenuItem" 
          key={item.key} 
          onClick={() => navigate(item.link)}
          >
            {item.label}
          </button>
          ))}
        </section>
        <LanguageChangeButton />
      </nav>

    </header>
  )
}
export default Header