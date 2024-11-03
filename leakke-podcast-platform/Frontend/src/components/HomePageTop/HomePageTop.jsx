import homeTopBg from '../../assets/Images/homepage_top.jpg'
import { useTranslation } from 'react-i18next'

const HomePageTop = () => {
  const { t } = useTranslation()
  return (
    <div className="d-flex justify-content-center align-items-center gap-2" style={{backgroundColor: 'var(--beige)'}}>
      <img src={homeTopBg} alt="" className="rounded-start-pill rounded-5" style={{width: '25%', height: '10%'}} />
      <span className="fs-4 text-dark" style={{width: '40%'}}>{t("homePageTopText")}</span>
    </div>
  )
}
export default HomePageTop