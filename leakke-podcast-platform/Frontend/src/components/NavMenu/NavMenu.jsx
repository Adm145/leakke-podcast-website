import './NavMenu.css'
import {useTranslation} from "react-i18next"
import { useNavigate } from "react-router-dom";


const NavMenu = () => {
  
  const navigate = useNavigate()
  const [t] = useTranslation("translation")

  const navBarItems = [
    {label: t("home"), link: "/", key: "home"},
    {label: t("about"), link: "/about", key: "about"},
    {label: t("contact"), link: "/contact", key: "contact"}
  ]

  return (
    <nav className="container-fluid d-flex justify-content-center gap-4 pb-3 mb" style={{backgroundColor: 'var(--black)'}}>
      {navBarItems.map((item) => (
            <button className="headerNavMenuItem py-2 px-3" key={item.key} onClick={() => navigate(item.link)}>
              {item.label}
            </button>
      ))}
    </nav>
  )
}
export default NavMenu