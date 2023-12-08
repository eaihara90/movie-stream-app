import { useHistory } from 'react-router-dom';
import './VideoDetail.scss';
import { MovieModel } from 'src/models/movie.model';

interface VideoDetailProps {
  movie: MovieModel;
  onPlayVideo: () => void;
}

export function VideoDetail({ movie, onPlayVideo }: VideoDetailProps): JSX.Element {
  const history = useHistory();
  
  return (
    <div className="video-detail">
      <div className="video-wrapper">
        <img className="video-poster" src={movie.coverUrl} />
        
        <div className="video-details">
          <h2 className="title">{movie.title}</h2>

          <p className="description">{movie.description}</p>

          <div className="detail-controls">
            <button
              className="btn-control"
              onClick={onPlayVideo}>
              <i className="ph-fill ph-play"></i>
            </button>

            <button
              className="btn-control"
              onClick={() => history.push('/')}>
              <i className="ph-fill ph-arrow-left"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}