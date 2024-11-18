import './Landing.css';
import selfImage1 from '../../../assets/Images/self_image_1.png'
import { socialLinksBlack } from '../../../utils/icons';
import { useTranslation } from "react-i18next"
import useDirection from "../../../utils/direction"

const Landing = () => {
  const direction = useDirection();
  const { t } = useTranslation();

  return (
    <section 
    className="landingContainer">

      <div className="landingImageContainer">
        <img src={selfImage1} alt="Description"/>
      </div>

      <div className="landingTextContainer">
        <h1 dir={direction}>{t("homeTopTitle")}</h1>
        <p dir={direction} >{t("homeTopText")}</p>
        <div>
          {socialLinksBlack.map((item) => (
            <a href={item.link} key={item.name} target="_blank" rel="noopener noreferrer">
              <img src={item.logo} alt={item.name} className="socialMediaLinkItem" />
            </a>
          ))}
        </div>
        
      </div>

    </section>
  )
}
export default Landing