import './HomePage.css'
import HomePageTop from '../../components/HomePageTop/HomePageTop'
import YoutubeCarousel from '../../components/YoutubeCarousel/YoutubeCarousel'
import Intro from '../../components/Intro/Intro'

const HomePage = () => {
  return (
    <main className="container-fluid mx-0 px-0">
      <Intro />
      <HomePageTop />
    </main>
  )
}
export default HomePage
