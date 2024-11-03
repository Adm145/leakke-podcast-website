import './Header.css'
import HeaderLinks from '../HeaderLinks/HeaderLinks'
import NavMenu from '../NavMenu/NavMenu'
import podcastLogo from '../../assets/logos/podcast_logo.jpg'


const Header = () => {
    
  const headerLogoStyle = {
    height: '10rem',
    mixBlendMode: 'multiply',
    borderRadius: '50%'
  }

  return (
    <header className="container-fluid d-flex align-items-center flex-column px-0" style={{ height: '20%'}}>
      <HeaderLinks />
      <img src={podcastLogo} alt="Podcast Logo" style={headerLogoStyle} />
      <NavMenu />
    </header>
  )
}
export default Header