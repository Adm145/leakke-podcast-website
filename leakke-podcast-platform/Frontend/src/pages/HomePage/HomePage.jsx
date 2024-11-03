import './HomePage.css'
import HomePageTop from '../../components/HomePageTop/HomePageTop'
import YoutubeCarousel from '../../components/YoutubeCarousel/YoutubeCarousel'

const HomePage = () => {
  return (
    <main className="container-fluid mx-0 px-0 ">
      <HomePageTop />
      <YoutubeCarousel />
    </main>
  )
}
export default HomePage
