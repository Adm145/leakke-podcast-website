import './HeaderLinks.css'
import LanguageChangeButton from '../LanguageChangeButton/LanguageChangeButton'
import { socialLinks } from '../../utils/socialLinks'

const HeaderLinks = () => {
  return (
    <div className="container-fluid d-flex flex-row justify-content-between align-items-center pt-2">
      <LanguageChangeButton />
      <div className="d-flex flex-row justify-content-end gap-2">
        {socialLinks.map((item) => (
          <a href={item.link} key={item.name} target="_blank" rel="noopener noreferrer">
            <img src={item.logo} alt={item.name} className="headerLinkItem" />
          </a>
        ))}
      </div>
    </div>
  )
}
export default HeaderLinks