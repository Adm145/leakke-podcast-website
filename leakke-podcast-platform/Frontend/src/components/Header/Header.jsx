import './Header.css'
import HeaderLinks from '../HeaderLinks/HeaderLinks'
import NavMenu from '../NavMenu/NavMenu'
import podcastLogo from '../../assets/logos/podcast_logo.jpg'


const Header = () => {
  return (
    <div className="border container-fluid d-flex align-items-center flex-column px-0">
      <HeaderLinks />
      <img src={podcastLogo} alt="Podcast Logo" className="headerLogo" />
      <NavMenu />
    </div>
  )
}
export default Header