import './HeaderLinks.css'
import LanguageChangeButton from '../LanguageChangeButton/LanguageChangeButton'
import { socialLinksWhite } from '../../utils/socialLinks'

const HeaderLinks = () => {
  return (
    <section className="container-fluid d-flex flex-row justify-content-between align-items-center py-2" style={{backgroundColor: 'var(--black)'}}>
      <LanguageChangeButton />
      <div className="d-flex flex-row justify-content-end gap-2">
        {socialLinksWhite.map((item) => (
          <a href={item.link} key={item.name} target="_blank" rel="noopener noreferrer">
            <img src={item.logo} alt={item.name} className="headerLinkItem" />
          </a>
        ))}
      </div>
    </section>
  )
}
export default HeaderLinks