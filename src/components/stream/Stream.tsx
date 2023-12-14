import { useRef, useState } from 'react';
import './Stream.scss';
import { baseApi } from 'src/env';
import { MovieModel } from 'src/models/movie.model';

interface StreamProps {
  movie: MovieModel;
  onClose: () => void;
}

export function Stream({ movie, onClose }: StreamProps): JSX.Element {
  const video = useRef<HTMLVideoElement>(null);
  const [showControls, setShowControls] = useState<boolean>(false);
  let timeout: number;

  const handleShowControls = () => {
    clearTimeout(timeout);

    setShowControls(true);

    timeout = setTimeout(() => {
      setShowControls(false)
    }, 4000);
  }
  
  return (
    <div className="stream-page" onMouseMove={handleShowControls}>
      <div className={`video-info-controls ${showControls ? 'visible' : ''}`}>
        <h3 className="title">{movie.title}</h3>

        <div className="controls">
          <button className="btn-controls" onClick={() => video.current?.requestFullscreen()}>
            <i className="ph ph-arrows-out-simple"></i>
          </button>

          <span className="separator"></span>

          <button className="btn-controls" onClick={onClose}>
            <i className="ph ph-x"></i>
          </button>
        </div>
      </div>

      <video
        id="video-player"
        autoPlay
        controls
        muted
        ref={video}>
        <source src={`${baseApi}/movie-stream/${movie.id}`} type="video/mp4" />
      </video>
    </div>
  );
}