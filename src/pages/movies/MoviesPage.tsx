import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './MoviesPage.scss';
import { MovieModel } from 'src/models/movie.model';
import { baseApi } from 'src/env';

export function MoviesPage(): JSX.Element {
  const [moviesList, setMoviesList] = useState<MovieModel[]>([]);

  useEffect(() => {
    loadMoviesList();
  }, []);

  const loadMoviesList = async (): Promise<void> => {
    try {
      const response = await fetch(`${baseApi}/movies`, { method: 'GET' });
      const data = await response.json();
      setMoviesList(data.movies);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="movies-page">
      <ul className="movies-list">
        { moviesList?.length > 0 && moviesList.map((x, index) => (
          <li key={index} className="movie-item">
            <Link to={x.coverUrl} className="movie-link">
              <img src={x.coverUrl} alt="" className="movie-cover" />
              <span className="movie-title">{x.title}</span>
            </Link>
          </li>
        ))}

      </ul>
    </div>
  );
}