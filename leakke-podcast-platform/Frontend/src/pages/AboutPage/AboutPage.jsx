import "./AboutPage.css"
import { useTranslation } from "react-i18next"
import {useDirection} from "Hooks"
import aboutSelfie from "../../assets/Images/studio_image.jpg"

export const AboutPage = () => {
  const direction = useDirection();
  const { t } = useTranslation();

  return (
    <main className="aboutContainer">

      <section className="aboutTopContainer">
        <div dir={direction} className="aboutTopTextContainer">
          <p >"{t("aboutTopText")}"</p>
        </div>  

        <div>
          <img src={aboutSelfie} alt="Selfie" className="aboutSelfieImage" />
        </div>
      </section>

      <section dir={direction} className="aboutBottomContainer">
        <p>{t("aboutBottomParagraph")}</p>
        <h3>-"{t("aboutBottomQuote")}"-</h3>
      </section>

    </main>
  )
}