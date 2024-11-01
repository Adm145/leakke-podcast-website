import './NavMenu.css'
import {useTranslation} from "react-i18next"

const NavMenu = () => {
  const [t] = useTranslation("translation")

  const navBarItems = [
    t("home"),
    t("about"),
    t("contact")
  ]

  return (
    <div className="container-fluid d-flex flex-row justify-content-center gap-5 pb-5 pt-2">
      {navBarItems.map((item) => (
            <button className="navMenuItem" key={item}>
              {item}
            </button>
      ))}
    </div>
  )
}
export default NavMenu