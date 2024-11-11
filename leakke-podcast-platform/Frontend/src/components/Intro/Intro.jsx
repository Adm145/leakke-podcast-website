import './Intro.css';
import YoutubeCarousel from '../YoutubeCarousel/YoutubeCarousel';

const Intro = () => {

  return (
    <div className="top-section position-relative"
     style={{height: '100vh'}}
     >
       
        <div className="header-content">
          <h2 className="fst-italic align-self-end" 
          style={{color: 'var(--brown-light)', position: 'absolute', top: '0', left: '10%'}}
          >"Voices of the Ethiopian Community in Israel"</h2>
          <YoutubeCarousel />
          <h3
          className="fst-italic"
          style={{color: 'var(--beige)', position: 'absolute', bottom: '0', right: '10%'}}
          >Inspiring stories, powerful insights, and real-life experiences.</h3>
        </div>
    </div>
  )
}
export default Intro