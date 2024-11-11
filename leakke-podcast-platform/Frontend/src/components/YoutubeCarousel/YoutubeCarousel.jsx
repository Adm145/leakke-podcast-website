import './YoutubeCarousel.css';
import { useContext } from 'react';
import { dataContext } from '../../contexts/dataContext';

const YoutubeCarousel = () => {
  const { episodesList } = useContext(dataContext);
  const baseUrl = "https://www.youtube.com/watch?v=";

  const carouselTextStyle = {
    background: "linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))",
    padding: "1rem",
    borderRadius: "0.5rem",
    position: "absolute",
    right: "1.2%",
    left: "0",
    bottom: "0",
    height: "20%",
    color: 'var(--beige)'
  };

  return (
    <section id="myCarousel" className="carousel slide container-fluid position-absolute top-50 start-50 translate-middle rounded-4 w-75"  data-bs-ride="carousel">
      <div className="carousel-indicators">
        {episodesList.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      <div className="carousel-inner position-relative">
        {episodesList.map((episode, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <a href={`${baseUrl + episode.snippet.resourceId.videoId}`} target="_blank" rel="noopener noreferrer">
              <img src={episode.snippet.thumbnails.maxres.url} className="d-block object-fit-fill" style={{width: '100%', height: '90%'}} alt="video thumbnail"/>
              <div dir='rtl' className="carousel-caption carouselText d-none d-md-block p-3 rounded fst-italic fw-bold" style={carouselTextStyle}>
                <h3 className="mb-1">{episode.snippet.title.slice(0, 100)}</h3>
                <p className="text-truncate mb-0">{episode.snippet.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </section>
    
  );
};

export default YoutubeCarousel;
