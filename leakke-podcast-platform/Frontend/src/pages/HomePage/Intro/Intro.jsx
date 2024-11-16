import './Intro.css';
import selfImage1 from '../../../assets/Images/self_image_1.png'
import { socialLinksBlack } from '../../../utils/socialLinks';

const Intro = () => {

  return (
    <section 
    className="d-flex flex-row-reverse" 
    style={{height: '100vh', backgroundColor: 'var(--beige)'}}>

      <div className="d-flex">
        <img src={selfImage1} alt="Description"/>
      </div>

      <div className="d-flex justify-content-center align-items-center w-50 mx-auto flex-column gap-3">

        <h1 
        className=" w-75 font-weight-bold"
        style={{fontSize: '80px', fontFamily: 'var(--glass-antiqua'}}>
          Exploring the Ethiopian Community in Israel
        </h1>

        <p className="fs-5 w-75 text-wrap mx-auto text-start">
          welcome to our podcast, where we shine a light on the diverse stories from the Ethiopian community in Israel
        </p>

        <div className="">
          {socialLinksBlack.map((item) => (
            <a href={item.link} key={item.name} target="_blank" rel="noopener noreferrer">
              <img src={item.logo} alt={item.name} className="headerLinkItem px-1" />
            </a>
          ))}
        </div>

      </div>

    </section>
  )
}
export default Intro