import './PodExperience.css'
import image_1 from "../../../assets/Images/self_image_2.jpg"
import image_2 from "../../../assets/Images/selfie_with_shimon_solomon.jpg"
import image_3 from "../../../assets/Images/moshe_solomon_studio.jpg"

const PodExperience = () => {
  return (
    <section
    className="border d-flex justify-content-between px-5 align-items-center"
    style={{height: "55vh", backgroundColor: "var(--light-beige)"}}>

      <div className="podExperienceContainerItem">
        <img src={image_1} alt="selfie image" className="podExperienceImageItem" />
        <h4 className="podExperienceTitleItem">
          The Podcast Experience
        </h4>
        <p className="podExperienceDescItem">
          Discover a curated collection of episodes
        </p>
      </div>

      <div className="podExperienceContainerItem">
        <img src={image_2} alt="image with shimon solomon" className="podExperienceImageItem" />
        <h4 className="podExperienceTitleItem">
          Authentic Voices
        </h4>
        <p className="podExperienceDescItem">
          Hear from a diverse range of guests of the community, from leaders to everyday individuals
        </p>
      </div>

      <div className="podExperienceContainerItem">
        <img src={image_3} alt="image of moshe solomon in the studio" className="podExperienceImageItem" />
        <h4 className="podExperienceTitleItem">
          Connecting Through
        </h4>
        <p className="podExperienceDescItem">
          Immerse yourself in the richness of the Ethiopian-Israeli experiece, as we explore the past, present, and future
        </p>
      </div>

    </section>
  )
}

export default PodExperience