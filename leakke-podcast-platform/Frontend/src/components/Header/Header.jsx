import './Header.css'
import HeaderLinks from '../HeaderLinks/HeaderLinks'
import NavMenu from '../NavMenu/NavMenu'

const Header = () => {
  return (
    <header className="container-fluid d-flex align-items-center flex-column px-0" style={{ height: '20%'}}>
      <HeaderLinks />
      <NavMenu />
    </header>
  )
}
export default Header