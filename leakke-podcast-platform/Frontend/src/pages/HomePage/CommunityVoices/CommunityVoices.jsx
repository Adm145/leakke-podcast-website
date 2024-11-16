import './CommunityVoices.css'
import bg from '../../../assets/Images/bg_1.webp'


const CommunityVoices = () => {
  return (
    <section
    className="communityVoicesContainer d-flex flex-column justify-content-center align-items-center">

      <div 
      className="d-flex flex-column align-items-center mb-5"
      >
        <p className="communityVoicesTopTitle">
          Amplifying Ethiopian Voices in Israel
        </p>

        <p className="communityVoicesTopText">
        This podcast celebrates the resilience, creativity, and spirit of the Ethiopian-Israeli community. Through heartfelt conversations, it highlights stories that inspire connection and foster a deeper understanding of Ethiopian heritage and the diverse experiences within Israel.
        </p>
      </div>

      <div
      className="d-flex flex-column align-items-center"
      >
        <h3 className="communityVoicesBottomTitle">
          About the Podcast
        </h3>

        <p className="communityVoicesBottomText">
          The Community Voices podcast is a platform for Ethiopian-Israelis to share their stories, experiences, and perspectives. Through interviews and conversations, the podcast aims to amplify the voices of the Ethiopian community
        </p>
      </div>

    </section>
  )
}
export default CommunityVoices