import { useState } from 'react';
import { Link } from 'react-router-dom';

import './MovieCard.scss';
import { MovieModel } from 'src/models/movie.model';

interface MovieCardProps {
  movie: MovieModel;
}

export function MovieCard({ movie }: MovieCardProps): JSX.Element {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  return (
    <li
      className="movie-item"
      onMouseOver={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}>
      <Link
        className="movie-link"
        to={`/detail/${movie.id}`}>
        <img src={movie.coverUrl} alt="" className="movie-cover" />
        <span className="movie-title">{movie.title}</span>
      </Link>

      { showDetails && 
        <div className="movie-description">
          {movie.description}
        </div>
      }
    </li>
  );
}