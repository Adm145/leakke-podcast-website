import "./AboutPage.css"
import { useTranslation } from "react-i18next"
import useDirection from "../../utils/direction"
import aboutSelfie from "../../assets/Images/studio_image.jpg"

const AboutPage = () => {
  const direction = useDirection();
  const { t } = useTranslation();

  return (
    <main
    className="border d-flex flex-column justify-content-center align-items-end"
    style={{backgroundColor: 'var(--beige)'}}>

      <section
      className="aboutTopContainer">
        <div className="aboutTopTextContainer">
          <p >"I BELIEVE IN THE POWER OF CONVERSATION"</p>
        </div>  

        <div>
          <img src={aboutSelfie} alt="selfie image" className="aboutSelfieImage" />
        </div>
      </section>

      <section
      // dir={direction}
      className="aboutBottomContainer container-fluid px-5">
        <p>
          As a dedicated community member and a voice within the Ethiopian-Israeli comminuty, I have always been passionate about the power of conversation. I believe that through open and honest dialogue, we can create a more inclusive and understanding society. This is why I have created the Leakeberhan Podcast Platform, a space where we can come together to share our stories, experiences, and ideas. I hope that this platform will serve as a catalyst for change and inspire others to join the conversation. Together, we can build a brighter future for all members of our community.
        </p>
        <h3>
          -"Through thoughtful conversation, I hope to uncover the resilience, wisdom and creativity that makes our community so unique."-
        </h3>
      </section>

    </main>
  )
}
export default AboutPage