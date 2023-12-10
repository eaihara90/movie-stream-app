import { useHistory } from 'react-router-dom';

import './VideoDetail.scss';
import { MovieModel } from 'src/models/movie.model';
import { IconButton } from '../icon-button/IconButton';

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
            <IconButton
              onClick={onPlayVideo}
              size="5.2rem">
              <i className="ph-fill ph-play"></i>
            </IconButton>

            <IconButton
              onClick={() => history.push('/')}
              size="5.2rem">
              <i className="ph-fill ph-arrow-u-up-left"></i>
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}