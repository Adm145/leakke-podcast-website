import { useContext } from 'react'
import { dataContext } from '../../contexts/dataContext'
import { CCarousel, CCarouselItem, CCarouselCaption, CImage } from '@coreui/react'
import { useTranslation } from 'react-i18next'
import useDirection from '../../utils/direction'

const YoutubeCarousel = () => {
  const { t } = useTranslation()
  const {episodesList} = useContext(dataContext)
  const baseUrl = "https://www.youtube.com/watch?v="
  const direction = useDirection()
  
  return (
    <div className="pb-3" style={{backgroundColor: 'var(--brown'}}>
      <div dir={direction} className="py-3 text-center text-light fst-italic fs-2">
        {t("latestEpisodes")}
      </div>
      <CCarousel controls>
        {episodesList.map((item, index) => (
          <CCarouselItem key={index}>
            <div className="d-flex justify-content-center align-items-center">
              <a 
              href={baseUrl+item.snippet.resourceId.videoId} 
              target='_blank' 
              rel="noopener noreferrer" 
              className="d-flex justify-content-center">
                <CImage 
                  className="d-block" 
                  src={item.snippet.thumbnails.maxres.url} 
                  alt={`slide ${index}`} 
                  style={{height:'700px', objectFit: 'cover', borderRadius: '10px', width: '100rem', maxWidth: '100%'}} 
                />
              </a>
            </div>
            <CCarouselCaption className="d-none d-md-block bg-dark bg-opacity-50 mb-5">
              <h3 className="text-white">{item.snippet.title}</h3>
              <p className="text-light">{item.snippet.description}</p>
            </CCarouselCaption>
          </CCarouselItem>
        ))}
      </CCarousel>
    </div>
  )
}
export default YoutubeCarousel