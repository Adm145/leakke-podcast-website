import './HomePage.css'
import { Landing, PodExperience, CommunityVoices } from 'Pages'

export const HomePage = () => {
  return (
    <main className="container-fluid mx-0 px-0">
      <Landing />
      <PodExperience />
      <CommunityVoices />
    </main>
  )
}