import './HomePage.css'
import homeTopBg from '../../assets/Images/waterfall_placeholder.jpg'
import { useTranslation } from 'react-i18next'

const HomePage = () => {
  const { t } = useTranslation()

  return (
    <main className="container-fluid mx-0 px-0 ">
      <div className="d-flex justify-content-center align-items-center gap-2" style={{backgroundColor: 'var(--brown)'}}>
        <img src={homeTopBg} alt="" className='rounded-start-pill rounded-end-5' style={{width: '40%'}} />
        <span className="w-25 fs-4 text-light opacity-75">{t("homePageTopText")}</span>
      </div> 
    </main>
  )
}
export default HomePage
