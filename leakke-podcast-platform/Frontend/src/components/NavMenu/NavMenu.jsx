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
    <nav className="container-fluid d-flex flex-row justify-content-center gap-4 pb-3">
      {navBarItems.map((item) => (
            <button className="headerNavMenuItem" key={item.key} onClick={() => navigate(item.link)}>
              {item.label}
            </button>
      ))}
    </nav>
  )
}
export default NavMenu