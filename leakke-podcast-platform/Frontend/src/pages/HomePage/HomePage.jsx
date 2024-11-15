import './HomePage.css'
import Intro from './Intro/Intro'
import CommunityVoices from './CommunityVoices/CommunityVoices'
import PodExperience from './PodExperience/PodExperience'

const HomePage = () => {
  return (
    <main className="container-fluid mx-0 px-0">
      <Intro />
      <PodExperience />
      <CommunityVoices />
    </main>
  )
}
export default HomePage
