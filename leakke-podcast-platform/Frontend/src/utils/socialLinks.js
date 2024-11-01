//social media icons
import FacebookIcon from '../assets/icons/facebook_black_icon.png'
import YoutubeIcon from '../assets/icons/youtube_black_icon.png'
import SpotifyIcon from '../assets/icons/spotify_black_icon.png'
import ApplePodcastIcon from '../assets/icons/apple_podcast_black_icon.png'

const facebookLink = process.env.REACT_APP_FACEBOOK_LINK
const youtubeLink = process.env.REACT_APP_YOUTUBE_LINK
const spotifyLink = process.env.REACT_APP_SPOTIFY_LINK
const applePodcastLink = process.env.REACT_APP_APPLE_PODCAST_LINK

export const socialLinks = [
  {name: "facebook", link: facebookLink, logo: FacebookIcon},
  {name: "youtube", link: youtubeLink, logo: YoutubeIcon},
  {name: "spotify", link: spotifyLink, logo: SpotifyIcon},
  {name: "apple podcast", link: applePodcastLink, logo: ApplePodcastIcon}
]
