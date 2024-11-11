import homeTopBg from '../../assets/Images/homepage_top.jpg'
import { useTranslation } from 'react-i18next'

const HomePageTop = () => {
  const { t } = useTranslation()
  return (
    <div className="d-flex justify-content-center align-items-center py-2 gap-2">
      <img src={homeTopBg} alt="" className="rounded-circle rounded-5" style={{width: '25%', height: '10%', objectPosition: '50% 70%'}} />
      <span className="fs-4 text-dark" style={{width: '35%'}}>{t("homePageTopText")}</span>
    </div>
  )
}
export default HomePageTop