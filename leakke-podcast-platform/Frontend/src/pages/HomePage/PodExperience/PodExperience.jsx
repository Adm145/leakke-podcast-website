import './PodExperience.css'
import image_1 from "../../../assets/Images/self_image_2.jpg"
import image_2 from "../../../assets/Images/selfie_with_shimon_solomon.jpg"
import image_3 from "../../../assets/Images/moshe_solomon_studio.jpg"
import {useTranslation} from "react-i18next"

const PodExperience = () => {

  const { t } = useTranslation()

  return (
    <section
    className="podExperienceContainer">

      <div className="podExperienceContainerItem">
        <img src={image_1} alt="Selfie" className="podExperienceImageItem" />
        <h4 className="podExperienceTitleItem">
          {t("homeMidTitle1")}
        </h4>
        <p className="podExperienceDescItem">
        {t("homeMidText1")}
        </p>
      </div>

      <div className="podExperienceContainerItem">
        <img src={image_2} alt="A photo with Shimon Solomon" className="podExperienceImageItem" />
        <h4 className="podExperienceTitleItem">
        {t("homeMidTitle2")}
        </h4>
        <p className="podExperienceDescItem">
        {t("homeMidText2")}
        </p>
      </div>

      <div className="podExperienceContainerItem">
        <img src={image_3} alt="Picture of Moshe Solomon in the studio" className="podExperienceImageItem" />
        <h4 className="podExperienceTitleItem">
        {t("homeMidTitle3")}
        </h4>
        <p className="podExperienceDescItem">
        {t("homeMidText3")}
        </p>
      </div>

    </section>
  )
}

export default PodExperience