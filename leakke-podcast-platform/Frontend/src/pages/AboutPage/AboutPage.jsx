import "./AboutPage.css"
import { useTranslation } from "react-i18next"
import useDirection from "../../utils/direction"
import aboutSelfie from "../../assets/Images/studio_image.jpg"

const AboutPage = () => {
  const direction = useDirection();
  const { t } = useTranslation();

  return (
    <main className="aboutContainer">

      <section className="aboutTopContainer">
        <div dir={direction} className="aboutTopTextContainer">
          <p >"{t("aboutTopText")}"</p>
        </div>  

        <div>
          <img src={aboutSelfie} alt="selfie image" className="aboutSelfieImage" />
        </div>
      </section>

      <section dir={direction} className="aboutBottomContainer">
        <p>{t("aboutBottomParagraph")}</p>
        <h3>-"{t("aboutBottomQuote")}"-</h3>
      </section>

    </main>
  )
}
export default AboutPage