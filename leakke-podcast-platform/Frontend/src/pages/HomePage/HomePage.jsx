import './HomePage.css'
import Landing from './Landing/Landing'
import CommunityVoices from './CommunityVoices/CommunityVoices'
import PodExperience from './PodExperience/PodExperience'

const HomePage = () => {
  return (
    <main className="container-fluid mx-0 px-0">
      <Landing />
      <PodExperience />
      <CommunityVoices />
    </main>
  )
}
export default HomePage
