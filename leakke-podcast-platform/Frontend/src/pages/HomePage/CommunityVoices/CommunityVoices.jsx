import './CommunityVoices.css'
import {useTranslation} from 'react-i18next'

const CommunityVoices = () => {
  const { t } = useTranslation()

  return (
    <section
    className="communityVoicesContainer">

      <div className="communityVoicesTopContainer">
        <p>{t("HomeBottomTitle1")}</p>

        <p>{t("HomeBottomText1")}</p>
      </div>

      <div className="communityVoicesBottomContainer">
        <p>{t("HomeBottomTitle2")}</p>

        <p>{t("HomeBottomText2")}</p>
      </div>

    </section>
  )
}
export default CommunityVoices